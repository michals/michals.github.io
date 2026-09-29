/**
 * Application controller for Biblia Tysiąclecia BM25 Search.
 */

import { PolishSnowballStemmer } from "./stemmer-snowball.js";
import { BM25Index, tokenize, highlightText } from "./bm25.js";
import { extractBibleData } from "./data-loader.js";

// DOM Elements
const searchInput = document.getElementById("searchInput");
const progressCard = document.getElementById("progressCard");
const progressStatus = document.getElementById("progressStatus");
const progressPercent = document.getElementById("progressPercent");
const progressBarFill = document.getElementById("progressBarFill");
const resultsList = document.getElementById("resultsList");
const bookGroupSelect = document.getElementById("bookGroupSelect");
const limitSelect = document.getElementById("limitSelect");
const examplesRow = document.getElementById("examplesRow");
const bottomControls = document.getElementById("bottomControls");

const modeButtons = {
  all: document.getElementById("btnModeAll"),
  pericopes: document.getElementById("btnModePericopes"),
  verses: document.getElementById("btnModeVerses")
};

// State
let currentMode = "all";
let currentFilter = "all";
let currentLimit = 10;
let currentSearchId = 0;
let debounceTimer = null;
let worker = null;
let isReady = false;

// Fallback in-memory objects (if Web Worker is not supported)
let fallbackVerseIndex = null;
let fallbackPericopeIndex = null;
let fallbackStemmer = new PolishSnowballStemmer();

// 1. Font switcher (matches Biblia Tysiąclecia index.html)
(function initFontSwitcher() {
  function setFontSize(size) {
    document.documentElement.style.fontSize = size + "px";
    try { localStorage.setItem("btv-font-size", size); } catch (e) {}
  }
  const switcher = document.querySelector(".font-switcher");
  if (switcher) {
    [14, 16, 18, 20, 22].forEach((size) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = "A";
      b.style.fontSize = size + "px";
      b.setAttribute("aria-label", "Rozmiar czcionki " + size + " pikseli");
      b.addEventListener("click", () => setFontSize(size));
      switcher.appendChild(b);
    });
  }
})();

function updateProgress(percent, message) {
  if (progressBarFill) progressBarFill.style.width = percent + "%";
  if (progressPercent) progressPercent.textContent = percent + "%";
  if (progressStatus && message) progressStatus.textContent = message;
}

function populateBookGroups(books) {
  if (!bookGroupSelect) return;
  bookGroupSelect.innerHTML = "";

  // 1. General presets
  const optAll = document.createElement("option");
  optAll.value = "all";
  optAll.textContent = "Cała Biblia";
  bookGroupSelect.appendChild(optAll);

  const optST = document.createElement("option");
  optST.value = "testament-ST";
  optST.textContent = "Stary Testament";
  bookGroupSelect.appendChild(optST);

  const optNT = document.createElement("option");
  optNT.value = "testament-NT";
  optNT.textContent = "Nowy Testament";
  bookGroupSelect.appendChild(optNT);

  // 2. Canonical groups (matching biblia/index.html categories)
  const optGroupCats = document.createElement("optgroup");
  optGroupCats.label = "Grupy ksiąg (zbiory)";

  const groups = [
    { value: "cat-pentateuch", label: "Pięcioksiąg"},
    { value: "cat-history-st", label: "Księgi historyczne ST" },
    { value: "cat-wisdom-st", label: "Mądrościowe ST" },
    { value: "cat-prophets-st", label: "Prorockie ST" },
    { value: "cat-gospels", label: "Ewangelie" },
    { value: "cat-history-nt", label: "Dzieje Apostolskie" },
    { value: "cat-letters", label: "Listy Apostolskie" },
    { value: "cat-prophets-nt", label: "Apokalipsa św. Jana" }
  ];

  groups.forEach((g) => {
    const opt = document.createElement("option");
    opt.value = g.value;
    opt.textContent = g.label;
    optGroupCats.appendChild(opt);
  });
  bookGroupSelect.appendChild(optGroupCats);

  // 3. Stary Testament individual books
  const optGroupST = document.createElement("optgroup");
  optGroupST.label = "Stary Testament (pojedyncze księgi)";
  books.filter(b => b.testament === "ST").forEach((b) => {
    const opt = document.createElement("option");
    opt.value = `book-${b.short.replace(/\s+/g, "")}`;
    opt.textContent = `${b.title} (${b.short})`;
    optGroupST.appendChild(opt);
  });
  bookGroupSelect.appendChild(optGroupST);

  // 4. Nowy Testament individual books
  const optGroupNT = document.createElement("optgroup");
  optGroupNT.label = "Nowy Testament (pojedyncze księgi)";
  books.filter(b => b.testament === "NT").forEach((b) => {
    const opt = document.createElement("option");
    opt.value = `book-${b.short.replace(/\s+/g, "")}`;
    opt.textContent = `${b.title} (${b.short})`;
    optGroupNT.appendChild(opt);
  });
  bookGroupSelect.appendChild(optGroupNT);
}

// Initialize search worker with fallback
function initEngine() {
  let workerSupported = false;
  try {
    worker = new Worker("js/search-worker.js?v=2.3", { type: "module" });
    workerSupported = true;
  } catch (err) {
    console.warn("Web Worker unavailable, falling back to main-thread execution:", err);
  }

  if (workerSupported) {
    worker.onmessage = function (e) {
      const data = e.data;
      if (!data) return;

      if (data.type === "progress") {
        updateProgress(data.percent, `Indeksowanie: ${data.book} (${data.current}/${data.total})...`);
      } else if (data.type === "status") {
        updateProgress(data.progress, data.message);
      } else if (data.type === "ready") {
        isReady = true;
        const readyMsg = data.fromCache
          ? "Wczytano z pamięci podręcznej (błyskawiczny start)!"
          : "Baza gotowa do wyszukiwania!";
        updateProgress(100, readyMsg);
        setTimeout(() => {
          if (progressCard) progressCard.style.display = "none";
        }, data.fromCache ? 80 : 300);

        if (data.books) {
          populateBookGroups(data.books);
          checkInitialUrl();
        }
      } else if (data.type === "results") {
        if (data.id === currentSearchId) {
          renderResults(data);
        }
      } else if (data.type === "error") {
        console.error("Worker error:", data.error);
        if (progressStatus) progressStatus.textContent = "Błąd: " + data.error;
      }
    };

    const jsonUrl = new URL("../bt5.json", import.meta.url).href;
    worker.postMessage({ type: "init", jsonUrl });
  } else {
    // Main-thread fallback
    initMainThreadFallback();
  }
}

async function initMainThreadFallback() {
  try {
    updateProgress(10, "Pobieranie bazy tekstu (bt5.json)...");
    const jsonUrl = new URL("../bt5.json", import.meta.url).href;
    const resp = await fetch(jsonUrl);
    const bibleData = await resp.json();

    updateProgress(30, "Przetwarzanie ksiąg...");
    const extracted = extractBibleData(bibleData, (curr, tot, bookTitle) => {
      const pct = Math.round(30 + (curr / tot) * 40);
      updateProgress(pct, `Indeksowanie: ${bookTitle} (${curr}/${tot})...`);
    });

    populateBookGroups(extracted.books);

    fallbackStemmer = new PolishSnowballStemmer();

    fallbackVerseIndex = new BM25Index({ stemmer: fallbackStemmer });
    fallbackPericopeIndex = new BM25Index({ stemmer: fallbackStemmer });

    fallbackVerseIndex.addDocuments(extracted.verses);
    fallbackPericopeIndex.addDocuments(extracted.pericopes);

    isReady = true;
    updateProgress(100, "Gotowe!");
    setTimeout(() => {
      if (progressCard) progressCard.style.display = "none";
    }, 300);

    checkInitialUrl();
  } catch (err) {
    console.error("Fallback initialization error:", err);
    if (progressStatus) progressStatus.textContent = "Błąd wczytywania bazy: " + err.message;
  }
}

function matchesFilter(doc, filter) {
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
}

function triggerSearch() {
  const query = searchInput.value.trim();

  if (!isReady || !query) {
    if (resultsList) resultsList.innerHTML = "";
    if (examplesRow) examplesRow.style.display = "flex";
    if (bottomControls) bottomControls.style.display = "none";
    updateUrlParams();
    return;
  }

  currentSearchId++;
  const searchPayload = {
    type: "search",
    id: currentSearchId,
    query,
    mode: currentMode,
    filter: currentFilter,
    limit: currentLimit
  };

  if (worker) {
    worker.postMessage(searchPayload);
  } else if (fallbackVerseIndex && fallbackPericopeIndex) {
    // Run synchronously on main thread
    const t0 = performance.now();
    const filterFn = (doc) => matchesFilter(doc, currentFilter);

    let hits = [];
    if (currentMode === "verses") {
      hits = fallbackVerseIndex.search(query, { limit: currentLimit, filterFn });
    } else if (currentMode === "pericopes") {
      hits = fallbackPericopeIndex.search(query, { limit: currentLimit, filterFn });
    } else {
      const vHits = fallbackVerseIndex.search(query, { limit: currentLimit, filterFn });
      const pHits = fallbackPericopeIndex.search(query, { limit: currentLimit, filterFn });
      hits = [...vHits, ...pHits].sort((a, b) => b.score - a.score).slice(0, currentLimit);
    }
    const t1 = performance.now();
    const queryStems = Array.from(new Set(tokenize(query, fallbackStemmer)));

    renderResults({
      id: currentSearchId,
      query,
      results: hits,
      queryStems,
      durationMs: t1 - t0
    });
  }

  updateUrlParams();
}

function getDocUrl(url) {
  if (!url) return "#";
  if (url.startsWith("biblia/")) {
    return "../" + url.slice(7);
  }
  return url;
}

function renderResults({ query, results, queryStems, durationMs }) {
  if (!resultsList) return;

  if (results.length === 0) {
    if (examplesRow) examplesRow.style.display = "none";
    if (bottomControls) bottomControls.style.display = "none";
    resultsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <p><strong>Nie znaleziono wersetów ani perykop pasujących do zapytania.</strong></p>
        <p>Spróbuj zmienić słowa, sprawdzić pisownię lub wybrać tryb „Wszystkie księgi”.</p>
      </div>
    `;
    return;
  }

  if (examplesRow) examplesRow.style.display = "none";
  if (bottomControls) bottomControls.style.display = "flex";

  const stemmer = new PolishSnowballStemmer();

  const stemsSet = new Set(queryStems);

  const maxScore = results.length > 0 ? results[0].score : 1;
  const normalizationBase = Math.max(maxScore, 30.0);

  const html = results.map((r, index) => {
    const doc = r.doc;
    const isPericope = doc.type === "pericope";

    // Rank and normalized match percentage (normalized to max(maxScore, 30.0))
    const rank = index + 1;
    let pctString = "0%";
    if (normalizationBase > 0) {
      const pctVal = Math.min(100, (r.score / normalizationBase) * 100);
      pctString = pctVal >= 99.95 ? "100%" : `${pctVal.toFixed(1)}%`;
    }

    // Uniform reference styling:
    // Pericope: "Ks. Micheasza (Mi 6,1-5)"
    // Verse:    "Ks. Liczb (Lb 22,10)"
    const refTitle = isPericope
      ? `${doc.bookTitle} (${doc.range})`
      : `${doc.bookTitle} (${doc.book} ${doc.chapter},${doc.verse})`;

    if (isPericope) {
      const highlightedTitle = highlightText(doc.title, stemsSet, stemmer);
      const verses = doc.verses && doc.verses.length > 0 ? doc.verses : null;

      let passageHtml = "";
      if (verses && verses.length > 1) {
        // Multi-verse pericope: all verses flow continuously, smoothly expanding and collapsing
        const allVersesHtml = verses.map(v => `<sup class="vn">${v.verse}</sup>${highlightText(v.text, stemsSet, stemmer)}`).join(" ");

        passageHtml = `
          <div class="passage has-more">
            <span class="text-content" title="Kliknij, aby rozwinąć lub zwinąć fragment">${allVersesHtml} <span class="collapse-hint">[zwiń]</span></span>
          </div>
        `;
      } else if (verses && verses.length === 1) {
        const v0 = verses[0];
        passageHtml = `
          <div class="passage">
            <span class="text-content"><sup class="vn">${v0.verse}</sup>${highlightText(v0.text, stemsSet, stemmer)}</span>
          </div>
        `;
      } else {
        passageHtml = `
          <div class="passage">
            <span class="text-content">${highlightText(doc.text, stemsSet, stemmer)}</span>
          </div>
        `;
      }

      const docUrl = getDocUrl(doc.url);
      return `
        <article class="result-card" data-index="${index}">
          <div class="result-header">
            <span class="result-rank">${rank}.</span>
            <span class="result-score" title="Wynik trafności (BM25: ${r.score.toFixed(2)})">${pctString}</span>
            <a class="result-ref" href="${docUrl}" target="_new" rel="noopener" title="Otwórz w Biblii">${refTitle}</a>
          </div>
          <div class="pericope-title-highlight">${highlightedTitle}</div>
          ${passageHtml}
        </article>
      `;
    } else {
      // Verse result
      const docUrl = getDocUrl(doc.url);
      const highlightedVerse = highlightText(doc.text, stemsSet, stemmer);
      return `
        <article class="result-card" data-index="${index}">
          <div class="result-header">
            <span class="result-rank">${rank}.</span>
            <span class="result-score" title="Wynik trafności (BM25: ${r.score.toFixed(2)})">${pctString}</span>
            <a class="result-ref" href="${docUrl}" target="_new" rel="noopener" title="Otwórz w Biblii">${refTitle}</a>
          </div>
          <div class="passage">
            <span class="text-content"><sup class="vn">${doc.verse}</sup>${highlightedVerse}</span>
          </div>
        </article>
      `;
    }
  }).join("");

  resultsList.innerHTML = html;

  // Click on .text-content of multi-verse pericopes to toggle expand/collapse
  resultsList.querySelectorAll(".passage.has-more .text-content").forEach((textContent) => {
    textContent.addEventListener("click", (e) => {
      // Do not toggle if user clicked on a link or is selecting text
      if (e.target.closest("a") || (window.getSelection && window.getSelection().toString().length > 0)) {
        return;
      }
      const card = textContent.closest(".result-card");
      if (!card) return;
      const wasExpanded = card.classList.contains("expanded");
      card.classList.toggle("expanded");
      if (wasExpanded) {
        textContent.scrollTop = 0;
      }
    });
  });
}

function updateUrlParams() {
  const query = searchInput.value.trim();
  const sp = new URLSearchParams();

  // Mode: m (p = pericopes, v = verses, omitted if all)
  if (currentMode === "pericopes") sp.set("m", "p");
  else if (currentMode === "verses") sp.set("m", "v");

  // Filter: f (omitted if all)
  if (currentFilter && currentFilter !== "all") sp.set("f", currentFilter);

  // Limit: l (omitted if default 10)
  if (currentLimit !== 10) sp.set("l", String(currentLimit));

  // Query: q - always placed at the very end
  if (query) sp.set("q", query);

  const searchStr = sp.toString();
  const newUrl = window.location.pathname + (searchStr ? "?" + searchStr : "") + window.location.hash;
  window.history.replaceState({}, "", newUrl);
}

function checkInitialUrl() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q") || "";

  // Mode: accept short 'm' (p, v, all) with fallback to legacy 'mode' (pericopes, verses, all)
  const rawMode = params.get("m") || params.get("mode") || "all";
  let mode = "all";
  if (rawMode === "p" || rawMode === "pericopes") mode = "pericopes";
  else if (rawMode === "v" || rawMode === "verses") mode = "verses";

  // Filter: accept short 'f' with fallback to legacy 'filter'
  const rawFilter = params.get("f") || params.get("filter") || "all";
  let filter = rawFilter.replace(":", "-");
  if (filter.startsWith("book-")) {
    const bSlug = filter.slice("book-".length).replace(/\s+/g, "");
    filter = `book-${bSlug}`;
  }

  // Limit: accept short 'l' with fallback to legacy 'limit'
  const limit = params.get("l") || params.get("limit") || "10";

  if (modeButtons[mode]) {
    setMode(mode, false);
  }
  if (bookGroupSelect) {
    bookGroupSelect.value = filter;
    if (!bookGroupSelect.value) {
      const opt = Array.from(bookGroupSelect.options).find(o =>
        o.value.replace(/\s+/g, "").toLowerCase() === filter.replace(/\s+/g, "").toLowerCase()
      );
      if (opt) {
        bookGroupSelect.value = opt.value;
      }
    }
    currentFilter = bookGroupSelect.value || filter;
  }
  if (limitSelect) {
    limitSelect.value = limit;
    currentLimit = parseInt(limit, 10) || 10;
  }

  searchInput.value = q;
  triggerSearch();
  if (!q) {
    searchInput.focus();
  }
}

function setMode(mode, doSearch = true) {
  currentMode = mode;
  Object.keys(modeButtons).forEach((k) => {
    modeButtons[k].classList.toggle("active", k === mode);
  });
  if (doSearch) triggerSearch();
}

// Event Listeners
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(triggerSearch, 150);
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = "";
    triggerSearch();
  } else if (e.key === "Enter") {
    clearTimeout(debounceTimer);
    triggerSearch();
  }
});

// Example chips navigation & history popstate
if (examplesRow) {
  examplesRow.addEventListener("click", (e) => {
    const chip = e.target.closest("a.chip");
    if (!chip || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    window.history.pushState({}, "", chip.href);
    checkInitialUrl();
  });
}

window.addEventListener("popstate", () => {
  checkInitialUrl();
});

// Mode segmented buttons
Object.keys(modeButtons).forEach((key) => {
  modeButtons[key].addEventListener("click", () => setMode(key));
});

// Books unified dropdown
if (bookGroupSelect) {
  bookGroupSelect.addEventListener("change", () => {
    currentFilter = bookGroupSelect.value;
    triggerSearch();
  });
}

// Result limit dropdown
if (limitSelect) {
  limitSelect.addEventListener("change", () => {
    currentLimit = parseInt(limitSelect.value, 10) || 10;
    triggerSearch();
  });
}

// Global keyboard shortcut '/' to focus search
window.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

// Initialize on page load
initEngine();
