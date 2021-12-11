importScripts('/dexie.js');
importScripts('/bd.js');

let static_cache = 'static_v2'; //Archivos estaticos (App Shell)
let dynamic_cache = 'dynamic_v1'; //Archivos dinamicos
let inmutable_cache = 'inmutable_v1'; //Archivos inmutables

//Se agregan los archivos al cache static
let files_appShell = [
    "/",
    "index.html",
    "/indexedDB.js"
];
//Se crea el cache inmutable
let inmutableFiles = [
    '/dexie.js'
];

//intalacion del SW
self.addEventListener('install', result => {
    console.log("SW instalado")
    

    const openStatic = caches.open(static_cache).then(cache => {
        cache.addAll(files_appShell);
    });

    const openInmutable = caches.open(inmutable_cache).then(cache => {
        cache.addAll(inmutableFiles);
    });

    //Este metodo hace todas las promesas que esten dentro en una sola
    result.waitUntil(
        Promise.all([
            openStatic,
            openInmutable
        ])
    );

})
self.addEventListener('activate', event => {

    console.log("SW activado")

    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (!static_cache.includes(key) && key.includes('static')) {
                    return caches.delete(key);
                }
            })
        ))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(
        cacheResponse => {
            if (cacheResponse) return cacheResponse;
            return fetch(event.request).then(
                networkResponse => {
                    caches.open(dynamic_cache).then(cache => {
                        cache.put(event.request, networkResponse.clone()).then();
                                return networkResponse;

                    })
                }
            )
        }
    ))

})

self.addEventListener('message', msj => {
    //Revisar si el msj tiene el mensaje skipWaiting
    if (msj.data.action == 'skipWaiting') {
        self.skipWaiting();

    }
})

self.addEventListener('sync',function(event) {
    if(event.tag=='Sicoronizacion'){
        sincronizar();
    }});