const CACHE = 'bew-money-v1';
const ASSETS = [
  './',
  './BeW-Money.html',
  './manifest.json',
  './icon.jpeg'
];
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
