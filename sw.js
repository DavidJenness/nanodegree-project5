var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/css/styles.css',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/index.html',
  '/js/apikey.js',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/sw.js'
];

// console.log('Running sw.js Dave!');

 self.addEventListener('install', function(event) {
  console.log('Performed Install, Dave!');
  event.waitUntil(
    caches.open('my-site-cache-v1').then(cache => cache.add('/index.html'))
  );
});


  self.addEventListener('activate', function(event) {

    var cacheWhitelist = ['my-site-cache-v1'];
    console.log('Performed Activate, Dave!');
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });




  self.addEventListener('fetch', function(event) {
    console.log('Performed Fetch, Dave!');
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            console.log('Fetch Success, Dave!');
            return response;
          }
          console.log('Fetch Failure, Dave!');
          return fetch(event.request);
        }
      )
    );
  });