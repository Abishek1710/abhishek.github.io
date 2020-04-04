'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "39cb1634a0a29d605a92722ee1c901c0",
"assets/assets/1.jpg": "916e5399f23240262adf8f7cf1128237",
"assets/assets/10.png": "e1fdc86b6773d5098c5ac1a5d4987e73",
"assets/assets/11.png": "f25c492e18a95b8a409bcd3bb57c93c9",
"assets/assets/111.jpg": "a37ba139f746eec453065bbc8a372003",
"assets/assets/12.png": "ccb9c576070161e0c76a0d1f1a4899ab",
"assets/assets/13.png": "9918587e754dde2392eddd12fba25bdf",
"assets/assets/17.jpg": "28835d2b05b207cdb667ef3fae32b923",
"assets/assets/18.jpg": "50724588014d5713c62853c32989081e",
"assets/assets/2.jpg": "6915b73f6fde5385c403fa9d445c8ad3",
"assets/assets/21.png": "576724558f8eb8f9331f4f954e94927c",
"assets/assets/222.jpg": "30b313974247143a9bbad638eb85ba09",
"assets/assets/24.png": "51c8130fbe1943b4d9f6d4c2778542e9",
"assets/assets/25.png": "6cce561702df607ee37ed614ff6ac0a6",
"assets/assets/26.jpg": "9e05f81d92b90d32fbd528757010ae5d",
"assets/assets/27.jpg": "ff2ef3889848af3a29a9b17369343207",
"assets/assets/28.png": "71d417b7c6b6c6ed29519e11208e981e",
"assets/assets/29.png": "a3cfc83047e25a06f45da86996879a6c",
"assets/assets/3.jpg": "03cee28e41e24cdfcc7335f63897f93e",
"assets/assets/30.png": "47d1ef5e2bceaed5aa9a15d42afc55fe",
"assets/assets/31.png": "2da00aedaefa880ddbf1f3ce8069c306",
"assets/assets/32.png": "53b742043fcd472f939df6e5806ba9a8",
"assets/assets/33.png": "ceceea44479f43ca9b4abd26a6f8f900",
"assets/assets/333.jpg": "40d8f13a90a339e4acd8b71b98fc2c05",
"assets/assets/34.png": "0fa24fa08f4fb97736e085bc8b3a32d3",
"assets/assets/4.jpg": "a004ff5794b5c477fdd5cc28c3b28786",
"assets/assets/444.jpg": "23f1a0051c6da27971af90d2e4e42cc5",
"assets/assets/5.jpg": "4d79dd33719d27151052eed62587d035",
"assets/assets/555.jpg": "4545af5eddd3b5569328b0a3ee0c5f7a",
"assets/assets/6.jpg": "fc412cf199a68eada40a29db754ba8c2",
"assets/assets/666.jpg": "12c32f5d8ef9f7bfda20417672a10c89",
"assets/assets/7.jpg": "0f4cf7442651274aad08e4d8a0cfdb10",
"assets/assets/8.png": "675b612ee0ed8e65b97bac52d1413111",
"assets/assets/ie.png": "0de7a4fabc27fc79009434318e84f4c3",
"assets/assets/masks-1.png": "70fd04c4f24f5c5b1fc3c1ed0bdec9ef",
"assets/assets/masks-2.png": "c3553c668b61c0152435a6c897eee8e6",
"assets/assets/masks-3.png": "cc059e5ff5b376f63e593543a9706546",
"assets/assets/masks-4.png": "d592cbd3ad67507ba0dbe0ec9b4411ef",
"assets/assets/masks-5.png": "606f4467ec3874419ca4a77a2faa702f",
"assets/assets/masks-6.png": "b016ecf9c49395f4f4853adc313b1013",
"assets/assets/masks-7.png": "512ac3fd276da34a5fcb3cfede9cd890",
"assets/assets/qua.webp": "37ee1179dac644dcca28fcf2a9865651",
"assets/assets/sound_alarm.wav": "5889f9a1a0cc28d9b15111f15b8066f3",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "f0b85f91a22070ab702646dffb4c7d50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fd5dbc7a37c81c994d935146c84f4118",
"/": "fd5dbc7a37c81c994d935146c84f4118",
"main.dart.js": "4f29ce81f263f2c28e13789173e9da23",
"manifest.json": "1ddaa0d98cc63b6117be2201c7c94856"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
