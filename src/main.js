import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";

if ("serviceWorker" in navigator) {
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!reloading) {
      window.location.reload();
      reloading = true;
    }
  });
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
