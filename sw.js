// Kill-switch service worker.
//
// The site shipped a Workbox precaching service worker until May 2024. It
// serves a cached copy of the old index.html, so visitors who still have it
// never see the current site (whose unregister code never runs for them).
// Browsers re-check sw.js on navigation; because this file differs from the
// old one, it replaces it, clears every cache, unregisters itself and reloads
// open pages from the network.
//
// Keep this file published: removing it (404) leaves the old worker in place.

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});
