const CACHE = "palatlas-v9";
const ASSETS = ["/", "/index.html", "/web/styles.css", "/web/app.js", "/src/index.js", "/src/data.js", "/src/tools.js", "/src/news.js", "/src/storage.js"];
self.addEventListener("install", (event) => event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS))));
self.addEventListener("fetch", (event) => event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request))));








