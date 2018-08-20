var CACHE_NAME = 'my-site-cache-v1';
// var urlsToCache = [
//   '/',
//   '/css/styles.css',
//   '/data/restaurants.json',
//   '/img/1.jpg',
//   '/img/2.jpg',
//   '/img/3.jpg',
//   '/img/4.jpg',
//   '/img/5.jpg',
//   '/img/6.jpg',
//   '/img/7.jpg',
//   '/img/8.jpg',
//   '/img/9.jpg',
//   '/img/10.jpg',
//   '/index.html',
//   '/js/apikey.js',
//   '/js/dbhelper.js',
//   '/js/main.js',
//   '/js/restaurant_info.js',
//   '/sw.js'
// ];

// console.log('Running sw.js Dave!');

//Need to Cache the results of the street view as well. Problem is getting variable from the apikey.js into the service worker
// var myKey = 'https://api.tiles.mapbox.com/v4/mapbox.streets.html?access_token=' + self.MapAPIkey;
// console.log('My key is ' + myKey + ',Dave!');


 self.addEventListener('install', function(event) {
  console.log('Performed Install, Dave!');
  event.waitUntil(
    caches.open('my-site-cache-v1').then(cache => cache.addAll(['/index.html',
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
    '/js/apikey.js',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/sw.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js ',
    '/']))
  );
});


  self.addEventListener('activate', function(event) {

    var cacheWhitelist = ['my-site-cache-v1'];
    console.log('Performed Activate, Dave!');
    self.skipWaiting();
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




  // self.addEventListener('fetch', function(event) {
  //   console.log('Performed Fetch, Dave!' + event.request.url);
  //   event.respondWith(
  //     caches.match(event.request)
  //       .then(function(response) {
  //         // Cache hit - return response
  //         if (response) {
  //           console.log('Fetch Success, Dave! '  + event.request.url);
  //           return response;
  //         }
  //         console.log('Fetch Failure, Dave! ' + event.request.url);
  //         return fetch(event.request);
  //       }
  //     )
  //   );
  // });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });