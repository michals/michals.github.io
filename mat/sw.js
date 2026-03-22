const CACHE_NAME = 'mat-v2';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './js/app.js',
    './js/engine.js',
    './js/levels.js',
    './manifest.json',
    './js/gsap.min.js',
    './js/mat.js',
    './snd/task-new.mp3',
    './snd/task-pass.mp3',
    './snd/task-pass-with-bonus.mp3',
    './snd/task-fail.mp3',
    './snd/level-pass.mp3',
    './snd/level-fail.mp3',
    './snd/bg.mp3'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
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
