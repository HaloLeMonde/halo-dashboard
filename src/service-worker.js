if (workbox) {
   workbox.precaching.precacheAndRoute(self.__precacheManifest)
   workbox.routing.registerNavigationRoute("/index.html")

  // API calls
  workbox.routing.registerRoute(
    ({ url }) => url.origin === "https://cryptum.halodotapi.com",
    new workbox.strategies.NetworkFirst({
      cacheName: "api-cache"
    })
  )
 }
 
 self.addEventListener("message", (event) => {
   if (event.data) {
     switch (event.data) {
       case "updatePlease":
         self.skipWaiting();
         break;
       default:
         break;
     }
   }
 })

 self.addEventListener("push", (event) => {
  const payload = event.data.json();
  self.registration.showNotification(payload.title, {
    body: payload.body
  })
})