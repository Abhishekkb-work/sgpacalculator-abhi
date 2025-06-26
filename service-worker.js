const CACHE_NAME = "sgpa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/abhisgpa.html",            // Important if this is part of the app
  "/style.css",                // Update path if your CSS is inside /css/
  "/js/script.js",             // Add your JS file if you use one
  "/json/manifest.json",       // Correct path to manifest
  "/icon-192.png",
  "/icon-512.png"
];

// Install event: caching app shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Fetch event: serve cached content when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// Optional: cleanup old cache versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
