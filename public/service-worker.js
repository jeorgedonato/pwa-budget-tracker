const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

const FILES_TO_CACHE = [
  "/",
  "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.3.1/materia/bootstrap.css",
  "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
  "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
  "/index.js",
];


self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});