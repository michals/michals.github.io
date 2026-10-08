/**
 * IndexedDB persistence and SHA-256 versioning for Biblia Tysiąclecia BM25 index.
 * Stores precomputed index structures and extracted book/verse/pericope lists.
 * Provides sub-100ms startup on repeated visits with 100% offline capability.
 */

const DB_NAME = "biblia_bm25_db";
const DB_VERSION = 1;
const STORE_NAME = "index_cache";
const META_KEY = "latest_meta";

/**
 * Compute SHA-256 hex string from an ArrayBuffer.
 * @param {ArrayBuffer} buffer
 * @returns {Promise<string>}
 */
export async function computeDataHash(buffer) {
  if (!crypto || !crypto.subtle) {
    throw new Error("crypto.subtle is not supported in this environment");
  }
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Open IndexedDB connection.
 * @returns {Promise<IDBDatabase>}
 */
function openDB() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      return reject(new Error("IndexedDB is not available"));
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "key" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Retrieve cached index from IndexedDB by version key.
 * @param {string} versionKey e.g. "<hash>_snowball"
 * @returns {Promise<object|null>}
 */
export async function getCachedIndex(versionKey) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(versionKey);

      req.onsuccess = () => {
        resolve(req.result ? req.result.payload : null);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("IndexedDB getCachedIndex failed, falling back to clean build:", err);
    return null;
  }
}

/**
 * Retrieve latest stored metadata.
 * @returns {Promise<object|null>}
 */
export async function getLatestMeta() {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(META_KEY);

      req.onsuccess = () => {
        resolve(req.result ? req.result.payload : null);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    return null;
  }
}

/**
 * Save precomputed index to IndexedDB and clean up older versions.
 * @param {string} versionKey e.g. "<hash>_snowball"
 * @param {object} payload { books, verses, pericopes, verseIndex, pericopeIndex }
 * @returns {Promise<boolean>}
 */
export async function saveCachedIndex(versionKey, payload) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);

      // Save payload
      store.put({
        key: versionKey,
        payload,
        savedAt: Date.now()
      });

      // Save metadata
      store.put({
        key: META_KEY,
        payload: {
          versionKey,
          savedAt: Date.now()
        }
      });

      // Clean up obsolete keys to avoid filling user storage
      const cursorReq = store.openCursor();
      cursorReq.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          if (cursor.key !== versionKey && cursor.key !== META_KEY) {
            cursor.delete();
          }
          cursor.continue();
        }
      };

      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn("IndexedDB saveCachedIndex failed (storage quota or private browsing):", err);
    return false;
  }
}
