/**
 * Inverted Index & BM25 Ranking Engine.
 * Standalone, zero-dependency, highly optimized for sub-millisecond retrieval.
 */

import { PolishSnowballStemmer } from "./stemmer-snowball.js";

const defaultStemmer = new PolishSnowballStemmer();

/**
 * Tokenize Polish text and return an array of stemmed terms.
 * @param {string} text Text to tokenize
 * @param {object} stemmer Object providing stemWord(word)
 * @returns {string[]} Array of stemmed tokens
 */
export function tokenize(text, stemmer = defaultStemmer) {
  if (!text) return [];
  const words = text.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
  const stems = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.length > 1) {
      stems.push(stemmer.stemWord(w));
    }
  }
  return stems;
}

/**
 * Extract individual unique query stems for matching and highlighting.
 * @param {string} query 
 * @param {object} stemmer 
 * @returns {Set<string>}
 */
export function getQueryStems(query, stemmer = defaultStemmer) {
  return new Set(tokenize(query, stemmer));
}

/**
 * Highlight matched terms in text using <mark>.
 * Stems each word in the target text and compares against queryStems.
 * Preserves the original capitalization and punctuation.
 * @param {string} text 
 * @param {Set<string>|string[]} queryStems 
 * @param {object} stemmer 
 * @returns {string} HTML string with <mark> tags
 */
export function highlightText(text, queryStems, stemmer = defaultStemmer) {
  if (!text) return "";
  const stemsSet = queryStems instanceof Set ? queryStems : new Set(queryStems);
  if (stemsSet.size === 0) return escapeHtml(text);

  // Match words while keeping delimiters
  return text.replace(/([\p{L}\p{N}]+)/gu, (match) => {
    if (match.length > 1) {
      const stemmed = stemmer.stemWord(match.toLowerCase());
      if (stemsSet.has(stemmed)) {
        return `<mark class="match">${escapeHtml(match)}</mark>`;
      }
    }
    return escapeHtml(match);
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export class BM25Index {
  /**
   * @param {object} options
   * @param {number} [options.k1=1.2] Term frequency saturation parameter
   * @param {number} [options.b=0.75] Document length normalization parameter
   * @param {object} [options.stemmer] Stemmer instance (defaults to PolishSnowballStemmer)
   */
  constructor({ k1 = 1.2, b = 0.75, stemmer = defaultStemmer } = {}) {
    this.k1 = k1;
    this.b = b;
    this.stemmer = stemmer;
    this.docs = [];
    this.docLengths = [];
    this.avgDocLength = 0;
    this.invertedIndex = new Map(); // stem -> array of { docId, count }
    this.idf = new Map();           // stem -> idf score
  }

  /**
   * Add documents and compute index statistics.
   * @param {Array<object>} documents Array of docs, each having `searchableText`
   */
  addDocuments(documents) {
    this.docs = documents;
    const N = documents.length;
    let totalLength = 0;

    this.docLengths = new Uint32Array(N);

    for (let docId = 0; docId < N; docId++) {
      const doc = documents[docId];
      const tokens = tokenize(doc.searchableText || doc.text, this.stemmer);
      const len = tokens.length;
      this.docLengths[docId] = len;
      totalLength += len;

      // Count term frequencies within this document
      const termCounts = new Map();
      for (let i = 0; i < len; i++) {
        const t = tokens[i];
        termCounts.set(t, (termCounts.get(t) || 0) + 1);
      }

      // Add to postings
      for (const [term, count] of termCounts) {
        let posting = this.invertedIndex.get(term);
        if (!posting) {
          posting = [];
          this.invertedIndex.set(term, posting);
        }
        posting.push({ docId, count });
      }
    }

    this.avgDocLength = N > 0 ? totalLength / N : 0;

    // Precalculate standard Robertson-Spärck Jones IDF
    for (const [term, postings] of this.invertedIndex) {
      const df = postings.length;
      const idfValue = Math.log(1 + (N - df + 0.5) / (df + 0.5));
      this.idf.set(term, idfValue);
    }
  }

  /**
   * Perform BM25 ranking on query.
   * @param {string} query 
   * @param {object} [options]
   * @param {number} [options.limit=20] Maximum results to return
   * @param {function} [options.filterFn] Optional filter predicate (doc => boolean)
   * @returns {Array<{ doc: object, score: number, queryStems: Set<string> }>}
   */
  search(query, { limit = 20, filterFn = null } = {}) {
    if (!query || typeof query !== "string") return [];
    const queryTokens = tokenize(query, this.stemmer);
    if (queryTokens.length === 0) return [];

    const queryStems = new Set(queryTokens);
    const scores = new Map();
    const { k1, b, avgDocLength } = this;

    for (const term of queryStems) {
      const postings = this.invertedIndex.get(term);
      if (!postings) continue;

      const idf = this.idf.get(term) || 0;

      for (let i = 0; i < postings.length; i++) {
        const { docId, count } = postings[i];

        if (filterFn && !filterFn(this.docs[docId])) {
          continue;
        }

        const dl = this.docLengths[docId];
        const tf = (count * (k1 + 1)) / (count + k1 * (1 - b + b * (dl / avgDocLength)));
        const termScore = idf * tf;

        scores.set(docId, (scores.get(docId) || 0) + termScore);
      }
    }

    if (scores.size === 0) return [];

    // Sort descending by score
    const results = Array.from(scores.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([docId, score]) => ({
        doc: this.docs[docId],
        score: Math.round(score * 100) / 100,
        queryStems
      }));

    return results;
  }

  /**
   * Serialize index structures for IndexedDB caching.
   */
  toJSON() {
    return {
      k1: this.k1,
      b: this.b,
      avgDocLength: this.avgDocLength,
      docLengths: this.docLengths,
      invertedIndex: Array.from(this.invertedIndex.entries()),
      idf: Array.from(this.idf.entries())
    };
  }

  /**
   * Restore an index from serialized cache structures.
   * @param {object} data Serialized data
   * @param {Array<object>} documents Documents array
   * @param {object} [stemmer] Stemmer instance
   * @returns {BM25Index}
   */
  static fromJSON(data, documents, stemmer = defaultStemmer) {
    const index = new BM25Index({ k1: data.k1, b: data.b, stemmer });
    index.docs = documents;
    index.avgDocLength = data.avgDocLength;
    index.docLengths = data.docLengths instanceof Uint32Array ? data.docLengths : new Uint32Array(data.docLengths);
    index.invertedIndex = new Map(data.invertedIndex);
    index.idf = new Map(data.idf);
    return index;
  }
}
