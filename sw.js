// CRM CETEM — Service Worker
// v2 — bump sempre que mudar a lista de assets ou a estratégia de cache
const CACHE='crm-cetem-v2';
const ASSETS=[
  './',
  './index.html',
  './manifest.json',
  './logo-cetem.png',
  './apple-touch-icon.png',
  './icon-512.png'
];

self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c=>c.addAll(ASSETS).catch(err=>console.warn('[SW] pré-cache parcial:',err)))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  let url;
  try{url=new URL(req.url)}catch{return}

  // Nunca interceptar chamadas à API do Supabase (REST, Auth, Realtime)
  if(url.hostname.endsWith('supabase.co'))return;

  const isNavigate=req.mode==='navigate'||(req.destination==='document');
  const isCDN=/cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(url.hostname);

  // Network-first para HTML/navegação (garante código novo), fallback para cache
  if(isNavigate){
    e.respondWith(
      fetch(req).then(r=>{
        const clone=r.clone();
        caches.open(CACHE).then(c=>c.put(req,clone)).catch(()=>{});
        return r;
      }).catch(()=>caches.match(req).then(m=>m||caches.match('./index.html')))
    );
    return;
  }

  // Cache-first para assets locais e CDNs versionados (Chart.js@4.4.1, etc.)
  if(url.origin===location.origin||isCDN){
    e.respondWith(
      caches.match(req).then(cached=>{
        if(cached)return cached;
        return fetch(req).then(r=>{
          if(r&&r.ok&&(r.type==='basic'||r.type==='cors')){
            const clone=r.clone();
            caches.open(CACHE).then(c=>c.put(req,clone)).catch(()=>{});
          }
          return r;
        });
      })
    );
  }
});
