const DB_NAME = "palatlas";
const STORE = "state";
export function createStorage() {
  let fallback = null;
  const open = () => new Promise((resolve, reject) => { if (!globalThis.indexedDB) return resolve(null); const request = indexedDB.open(DB_NAME, 1); request.onupgradeneeded = () => request.result.createObjectStore(STORE); request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error); });
  return { async load() { try { const db = await open(); if (!db) return fallback; return await new Promise((resolve, reject) => { const request = db.transaction(STORE).objectStore(STORE).get("app"); request.onsuccess = () => resolve(request.result ?? fallback); request.onerror = () => reject(request.error); }); } catch { return fallback; } }, async save(value) { fallback = value; try { const db = await open(); if (!db) return; const tx = db.transaction(STORE, "readwrite"); tx.objectStore(STORE).put(value, "app"); } catch {} } };
}
export const csvToObjects = (text) => { const lines = text.trim().split(/\r?\n/).filter(Boolean), headers = (lines.shift() ?? "").split(",").map((x) => x.trim()); return lines.map((line) => { const values = line.split(","); return Object.fromEntries(headers.map((h, i) => [h, (values[i] ?? "").trim()])); }); };