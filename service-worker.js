self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('tetris-cache').then((cache) => {
      return cache.addAll([
        '/',
        'icon-192x192.png',
        'icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
