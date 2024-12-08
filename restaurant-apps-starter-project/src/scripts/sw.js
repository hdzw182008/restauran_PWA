// import CacheHelper from './utils/cache-helper';
// import 'regenerator-runtime';

// const assetsToCache = [
//   './',
//   './images/images/icons/icon-72x72.png',
//   './images/images/icons/icon-96x96.png',
//   './images/images/icons/icon-128x128.png',
//   './images/images/icons/icon-144x144.png',
//   './images/images/icons/icon-152x152.png',
//   './images/images/icons/icon-192x192.png',
//   './images/images/icons/icon-384x384.png',
//   './images/images/icons/icon-512x512.png',
//   './index.html',
//   './favicon.png',
//   './app.bundle.js',
//   './manifest',
//   './sw.bundle.js',
// ];

// self.addEventListener('install', (event) => {
//   console.log('Installing SW');
//   event.waitUntill(CacheHelper.cachingAppShell([...assetsToCache]));
// });

// self.addEventListener('activate', (event) =>{
//   console.log('Activating Service Worker...');
//   event.waitUntill(CacheHelper.deleteOldCache());
// });

// self.addEventListener('fetch', (event) =>{
//   console.log(event.request);

//   event.respondWith(CacheHelper.revalidateCache(event.request));
// });