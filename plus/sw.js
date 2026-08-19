const CACHE_NAME = "math-game-1787138787319";

const FILES = [
    "./",
    "./assets/internal/config.d0832.json",
    "./assets/internal/import/09/0967b326a.1f618.json",
    "./assets/internal/index.d0832.js",
    "./assets/internal/native/02/0275e94c-56a7-410f-bd1a-fc7483f7d14a.cea68.png",
    "./assets/main/config.3b6d6.json",
    "./assets/main/import/07/079637fb3.a8917.json",
    "./assets/main/import/0c/0c2379d02.1a978.json",
    "./assets/main/index.3b6d6.js",
    "./assets/main/native/14/14cfca53-8928-485c-9250-272ddc427262.044cb.mp3",
    "./assets/main/native/4b/4bab67cb-18e6-4099-b840-355f0473f890.7050a.png",
    "./assets/main/native/59/59ff69cf-ef53-420d-aa93-024c8bab2b39.40e9b.png",
    "./assets/main/native/5b/5bb56428-fc5d-4538-af7b-f37a72631b97.d9c7c.mp3",
    "./assets/main/native/61/617323dd-11f4-4dd3-8eec-0caf6b3b45b9.6d707.png",
    "./assets/main/native/71/71561142-4c83-4933-afca-cb7a17f67053.c06a9.png",
    "./assets/main/native/73/7339dba3-358e-460f-a3ec-06fe25135aea.2228b.png",
    "./assets/main/native/74/74898f57-a9b2-41fc-b5e7-ea5f634c3963.368b7.mp3",
    "./assets/main/native/77/7793bdda-d604-4897-a01a-ccebe87a356a.07148.png",
    "./assets/main/native/a2/a21dcd4d-698f-4c92-bc78-22bb6f76ada0.d4fc0.png",
    "./assets/main/native/a6/a629053d-ce20-42cf-83ca-522ef9a7bed0.fe712.png",
    "./assets/main/native/b4/b43ff3c2-02bb-4874-81f7-f2dea6970f18.83fcc.png",
    "./assets/main/native/c0/c02450fe-8342-4a16-b4bd-ee6a617f606a.1a184.png",
    "./assets/main/native/c8/c85dc3fc-eeae-45e1-86fe-06200034e9a8.b94f9.png",
    "./assets/main/native/d1/d14a9946-ce6f-4ee1-bec0-0a52b377f831.d1354.mp3",
    "./assets/main/native/d6/d6d3ca85-4681-47c1-b5dd-d036a9d39ea2.d55c2.png",
    "./assets/main/native/d8/d81ec8ad-247c-4e62-aa3c-d35c4193c7af.cdbc9.png",
    "./assets/main/native/e8/e851e89b-faa2-4484-bea6-5c01dd9f06e2.90cf4.png",
    "./assets/main/native/fa/fa32611b-e8b0-4fa5-9656-8d40b0a40530.9ee53.mp3",
    "./assets/main/native/fa/faa1e3f5-01e7-400c-8ddd-34ae810d9848.a1a14.mp3",
    "./cocos2d-js-min.613cf.js",
    "./favicon.8de18.ico",
    "./index.html",
    "./main.3265a.js",
    "./splash.85cfd.png",
    "./src/settings.ce9d2.js",
    "./style-desktop.81ede.css",
    "./style-mobile.25fc5.css"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)

      .then((cache) => cache.addAll(FILES)),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()

      .then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          }),
        );
      }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)

      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      }),
  );
});
