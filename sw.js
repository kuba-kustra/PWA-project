var cacheName = 'PWA Project';
var filesToCache = [
  './',
  './index.html',
  './main.js'
];

// install worker
self.addEventListener("install", installEvent => {
  installEvent.waitUntil( // wait untill my parameter is resolved
      caches.open(cacheName).then(cache => {
          console.log("Caching shell assets.");
          cache.addAll(filesToCache)
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