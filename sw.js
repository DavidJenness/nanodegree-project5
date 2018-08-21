var CACHE_NAME = 'my-site-cache-v1';

self.addEventListener('install', function (event) {
  console.log('Performed Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(['/index.html',
      '/css/styles.css',
      '/data/restaurants.json',
      '/js/apikey.js',
      '/js/dbhelper.js',
      '/js/main.js',
      '/js/restaurant_info.js',
      '/sw.js',
      '/'
    ]))
  );
});


self.addEventListener('activate', function (event) {

  var cacheWhitelist = [CACHE_NAME];
  console.log('Performed Activate');
  self.skipWaiting();
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});