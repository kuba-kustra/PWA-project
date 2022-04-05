var cacheName = 'PWA Project';
var filesToCache = [
  './',
  './manifest.json',
  './index.html',
  './main.js'
];

// install worker
self.addEventListener("install", installEvent => {
  installEvent.waitUntil( // wait untill my parameter is resolved
      caches.open(staticCacheName).then(cache => {
          console.log("Caching shell assets.");
          cache.addAll(assets)
      })
  )
})

// activate event (reainstallation)
self.addEventListener("activate", activateEvent => {
  console.log("Service Worker activated.")
})

// fetch event
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
          return res || fetch(fetchEvent.request)
      })
  )
})