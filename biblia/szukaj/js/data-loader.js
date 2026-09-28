/**
 * Data loader and parser for Biblia Tysiąclecia (bt5.json).
 * Handles marker stripping ([^...], [:...], [/]), sequential pericope extraction,
 * boundary splitting, and document preparation for BM25 indexing.
 */

/**
 * Remove footnotes [^1], dictionary slugs [:slug], and pericope boundaries [/].
 * Also normalizes excessive whitespace.
 */
export function cleanText(text) {
  if (!text) return "";
  return text
    .replace(/\[\^[^\]]+\]/g, "")        // remove footnotes
    .replace(/\[:[^\]]+\]/g, "")         // remove dictionary keys
    .replace(/\[\/\]/g, "")              // remove pericope boundary marker
    .replace(/\[@([^\]]+)\]\s*/g, "$1 ") // convert speaker markers [@Speaker:] to Speaker:
    .replace(/[ \t]+/g, " ")             // normalize spaces
    .trim();
}

/**
 * Clean a heading/pericope title.
 */
export function cleanTitle(title) {
  if (!title) return "";
  return title
    .replace(/\[\^[^\]]+\]/g, "")
    .replace(/\[:[^\]]+\]/g, "")
    .replace(/\[@([^\]]+)\]\s*/g, "$1 ")
    .trim();
}

/**
 * Map book short abbreviation to HTML filename in biblia/
 * e.g. "1 Sm" -> "1Sm", "Kpł" -> "Kpl", "Łk" -> "Lk"
 */
export function toBookHtmlName(short) {
  return short
    .replace(/\s+/g, "")
    .replace("Kpł", "Kpl")
    .replace("Łk", "Lk");
}

/**
 * Get the first non-empty line of a text (used for compact previews).
 */
export function getFirstLine(text) {
  if (!text) return "";
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
  return lines.length > 0 ? lines[0] : text;
}

/**
 * Extract text from a verse according to pericope boundary rules.
 * @param {string} rawText 
 * @param {boolean} isStartVerse Whether this is the first verse of the pericope
 * @param {boolean} isEndVerse Whether this is the last verse of the pericope
 */
function slicePericopeVerse(rawText, isStartVerse, isEndVerse) {
  let text = rawText;
  if (text.includes("[/]")) {
    const parts = text.split("[/]");
    if (isStartVerse && !isEndVerse) {
      // Start verse: take only what follows the boundary
      text = parts.slice(1).join(" ");
    } else if (isEndVerse && !isStartVerse) {
      // End verse: take only what precedes the boundary
      text = parts[0];
    } else if (isStartVerse && isEndVerse) {
      // Both start and end in a single verse: take middle or whole
      text = parts.join(" ");
    }
  }
  return cleanText(text);
}

/**
 * Process raw bt5.json data into structured verses and pericopes.
 * @param {object} bibleData Parsed bt5.json object
 * @param {function} onBookProgress Optional callback (currentBookIndex, totalBooks, bookTitle)
 * @returns {{ books: Array, verses: Array, pericopes: Array }}
 */
export function extractBibleData(bibleData, onBookProgress = null) {
  const books = [];
  const verses = [];
  const pericopes = [];

  const totalBooks = bibleData.books.length;

  for (let bIndex = 0; bIndex < totalBooks; bIndex++) {
    const book = bibleData.books[bIndex];

    if (onBookProgress) {
      onBookProgress(bIndex + 1, totalBooks, book.title);
    }

    books.push({
      short: book.short,
      title: book.title,
      testament: book.testament,
      cat: book.cat,
      num: book.num
    });

    // Flatten all verses in book canonically with chapter and verse info
    const bookVerseList = [];
    for (const ch of book.chapters) {
      for (const v of ch.verses) {
        const cleanedVerseText = cleanText(v.t);
        const verseDoc = {
          id: `${book.short}_v${ch.num}_${v.i}`,
          type: "verse",
          book: book.short,
          bookTitle: book.title,
          testament: book.testament,
          cat: book.cat,
          chapter: ch.num,
          verse: v.i,
          text: cleanedVerseText,
          firstLine: getFirstLine(cleanedVerseText),
          url: `../${toBookHtmlName(book.short)}.html#v${ch.num}_${v.i}`,
          searchableText: `${book.title} ${book.short} ${ch.num},${v.i} ${cleanedVerseText}`
        };
        verses.push(verseDoc);

        bookVerseList.push({
          chapter: ch.num,
          verseId: String(v.i),
          rawText: v.t,
          cleanText: cleanedVerseText
        });
      }
    }

    // Extract pericopes sequentially
    for (const ch of book.chapters) {
      if (!ch.headings) continue;

      for (const h of ch.headings) {
        if (h.k !== "pericope" || !h.b || !h.e) continue;

        const title = cleanTitle(h.t);
        const [bCh, bV] = h.b;
        const [eCh, eV] = h.e;

        const bIdx = bookVerseList.findIndex(x => x.chapter === bCh && x.verseId === String(bV));
        const eIdx = bookVerseList.findIndex(x => x.chapter === eCh && x.verseId === String(eV));

        if (bIdx === -1 || eIdx === -1 || eIdx < bIdx) {
          continue;
        }

        const pericopeVerses = [];
        const pericopeVersesText = [];
        for (let i = bIdx; i <= eIdx; i++) {
          const isStart = (i === bIdx);
          const isEnd = (i === eIdx);
          const sliced = slicePericopeVerse(bookVerseList[i].rawText, isStart, isEnd);
          if (sliced) {
            pericopeVersesText.push(sliced);
            pericopeVerses.push({
              verse: bookVerseList[i].verseId,
              chapter: bookVerseList[i].chapter,
              text: sliced
            });
          }
        }

        const aggregatedText = pericopeVersesText.join("\n");
        const rangeStr = (bCh === eCh && String(bV) === String(eV))
          ? `${bCh},${bV}`
          : (bCh === eCh ? `${bCh},${bV}-${eV}` : `${bCh},${bV} - ${eCh},${eV}`);

        // Boost pericope title by repeating in searchableText
        const searchableText = `${title} ${title} ${book.title} ${book.short} ${aggregatedText}`;

        pericopes.push({
          id: `${book.short}_vv${bCh}_${bV}__${eCh}_${eV}`,
          type: "pericope",
          book: book.short,
          bookTitle: book.title,
          testament: book.testament,
          cat: book.cat,
          title,
          range: `${book.short} ${rangeStr}`,
          b: h.b,
          e: h.e,
          verses: pericopeVerses,
          text: aggregatedText,
          firstLine: title,
          url: `../${toBookHtmlName(book.short)}.html#vv${bCh}_${bV}__${eCh}_${eV}`,
          searchableText
        });
      }
    }
  }

  return { books, verses, pericopes };
}
