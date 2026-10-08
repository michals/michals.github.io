import { PolishSnowballStemmer } from "./stemmer-snowball.js";
import { BM25Index, tokenize } from "./bm25.js";
import { extractBibleData } from "./data-loader.js";
import { computeDataHash, getCachedIndex, getLatestMeta, saveCachedIndex } from "./index-cache.js";

const STEMMER_ID = "snowball";
const stemmer = new PolishSnowballStemmer();

let verseIndex = null;
let pericopeIndex = null;
let versesList = [];
let pericopesList = [];
let booksList = [];
let isReady = false;

self.onmessage = async function (e) {
  const data = e.data;
  if (!data || !data.type) return;

  switch (data.type) {
    case "init": {
      try {
        const jsonUrl = data.jsonUrl || new URL("../bt5.json", import.meta.url).href;

        self.postMessage({ type: "status", message: "Inicjalizacja wyszukiwarki...", progress: 5 });

        // Step 1: Fetch raw bytes of bt5.json (uses HTTP browser cache if available)
        let buffer = null;
        try {
          const resp = await fetch(jsonUrl);
          if (resp.ok) {
            buffer = await resp.arrayBuffer();
          }
        } catch (netErr) {
          console.warn("Fetch failed, attempting offline IndexedDB fallback:", netErr);
        }

        const CACHE_SCHEMA_VERSION = "v3";
        let versionKey = null;
        if (buffer) {
          const hash = await computeDataHash(buffer);
          versionKey = `${hash}_${STEMMER_ID}_${CACHE_SCHEMA_VERSION}`;
        } else {
          // Offline mode: check if we have any cached version in IndexedDB
          const latestMeta = await getLatestMeta();
          if (latestMeta && latestMeta.payload && latestMeta.payload.versionKey) {
            versionKey = latestMeta.payload.versionKey;
          } else {
            throw new Error("Brak połączenia z siecią i brak bazy w pamięci podręcznej.");
          }
        }

        // Step 2: Check IndexedDB for precomputed index
        self.postMessage({ type: "status", message: "Sprawdzanie pamięci podręcznej...", progress: 20 });
        const cached = await getCachedIndex(versionKey);

        if (cached && cached.books && cached.books.length > 0) {
          // CACHE HIT! Instant restore in ~50-100ms
          self.postMessage({ type: "status", message: "Wczytywanie gotowego indeksu z pamięci podręcznej...", progress: 70 });

          booksList = cached.books;
          versesList = cached.verses;
          pericopesList = cached.pericopes;

          // Normalize any legacy cached URLs
          for (let i = 0; i < versesList.length; i++) {
            if (versesList[i].url && versesList[i].url.startsWith("biblia/")) {
              versesList[i].url = "../" + versesList[i].url.slice(7);
            }
          }
          for (let i = 0; i < pericopesList.length; i++) {
            if (pericopesList[i].url && pericopesList[i].url.startsWith("biblia/")) {
              pericopesList[i].url = "../" + pericopesList[i].url.slice(7);
            }
          }

          verseIndex = BM25Index.fromJSON(cached.verseIndex, versesList, stemmer);
          pericopeIndex = BM25Index.fromJSON(cached.pericopeIndex, pericopesList, stemmer);

          isReady = true;

          self.postMessage({
            type: "ready",
            verseCount: versesList.length,
            pericopeCount: pericopesList.length,
            books: booksList,
            fromCache: true
          });
          break;
        }

        // CACHE MISS: Build from scratch
        if (!buffer) {
          throw new Error("Nie można zbudować indeksu bez pliku danych.");
        }

        self.postMessage({ type: "status", message: "Przetwarzanie tekstu ksiąg i perykop...", progress: 30 });

        const textDecoder = new TextDecoder();
        const jsonText = textDecoder.decode(buffer);
        const rawBibleData = JSON.parse(jsonText);

        const extracted = extractBibleData(rawBibleData, (current, total, bookTitle) => {
          const pct = Math.round(30 + (current / total) * 35);
          self.postMessage({
            type: "progress",
            current,
            total,
            book: bookTitle,
            percent: pct,
            stage: "extract"
          });
        });

        booksList = extracted.books;
        versesList = extracted.verses;
        pericopesList = extracted.pericopes;

        self.postMessage({ type: "status", message: "Indeksowanie perykop...", progress: 70 });
        pericopeIndex = new BM25Index({ stemmer });
        pericopeIndex.addDocuments(pericopesList);

        self.postMessage({ type: "status", message: "Indeksowanie wersetów...", progress: 85 });
        verseIndex = new BM25Index({ stemmer });
        verseIndex.addDocuments(versesList);

        isReady = true;

        // Notify UI immediately so search is ready without waiting for IndexedDB write
        self.postMessage({
          type: "ready",
          verseCount: versesList.length,
          pericopeCount: pericopesList.length,
          books: booksList,
          fromCache: false
        });

        // Asynchronously persist precomputed index to IndexedDB in the background
        saveCachedIndex(versionKey, {
          books: booksList,
          verses: versesList,
          pericopes: pericopesList,
          verseIndex: verseIndex.toJSON(),
          pericopeIndex: pericopeIndex.toJSON()
        }).catch((err) => {
          console.warn("Zapis indeksu do IndexedDB nie powiódł się:", err);
        });

      } catch (err) {
        self.postMessage({ type: "error", error: err.message });
      }
      break;
    }

    case "search": {
      if (!isReady) {
        self.postMessage({ type: "results", id: data.id, results: [], error: "Indeks nie jest jeszcze gotowy." });
        return;
      }

      try {
        const { id, query, mode = "all", filter = "all", limit = 30 } = data;
        const t0 = performance.now();

        const normMode = (mode === "v" || mode === "verses")
          ? "verses"
          : (mode === "p" || mode === "pericopes")
            ? "pericopes"
            : "all";

        const filterFn = (doc) => {
          if (!filter || filter === "all" || filter === "ALL") return true;
          const normFilter = filter.replace(":", "-");
          if (normFilter.startsWith("testament-")) {
            const t = normFilter.slice("testament-".length).trim().toUpperCase();
            return doc.testament === t;
          }
          if (normFilter.startsWith("book-")) {
            const b = normFilter.slice("book-".length).replace(/\s+/g, "").toLowerCase();
            return !!(doc.book && doc.book.replace(/\s+/g, "").toLowerCase() === b);
          }
          if (normFilter === "cat-pentateuch") return doc.testament === "ST" && doc.cat === "pentateuch";
          if (normFilter === "cat-history-st") return doc.testament === "ST" && doc.cat === "history";
          if (normFilter === "cat-wisdom-st") return doc.testament === "ST" && doc.cat === "wisdom";
          if (normFilter === "cat-prophets-st") return doc.testament === "ST" && doc.cat === "prophets";
          if (normFilter === "cat-gospels") return doc.testament === "NT" && doc.cat === "gospels";
          if (normFilter === "cat-history-nt") return doc.testament === "NT" && (doc.cat === "history" || doc.book === "Dz");
          if (normFilter === "cat-letters") return doc.testament === "NT" && doc.cat === "letters";
          if (normFilter === "cat-prophets-nt") return doc.testament === "NT" && (doc.cat === "prophets" || doc.book === "Ap");
          return false;
        };

        let results = [];
        if (normMode === "verses") {
          results = verseIndex.search(query, { limit, filterFn });
        } else if (normMode === "pericopes") {
          results = pericopeIndex.search(query, { limit, filterFn });
        } else {
          // "all": query both, then sort by BM25 score
          const vHits = verseIndex.search(query, { limit, filterFn });
          const pHits = pericopeIndex.search(query, { limit, filterFn });
          results = [...vHits, ...pHits]
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
        }

        const t1 = performance.now();
        const queryStems = Array.from(new Set(tokenize(query, stemmer)));

        self.postMessage({
          type: "results",
          id,
          query,
          results,
          queryStems,
          durationMs: t1 - t0
        });
      } catch (err) {
        console.error("Search worker error:", err);
        self.postMessage({
          type: "results",
          id: data.id,
          query: data.query,
          results: [],
          queryStems: [],
          error: err.message
        });
      }
      break;
    }
  }
};
