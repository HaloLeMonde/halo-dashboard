import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HMCC from "../views/HMCC/Hmcc.vue"
import HaloInfinite from "../views/HaloInfinite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hmcc",
    name: "HMCC",
    component: HMCC,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/halo-infinite",
    name: "HaloInfinite",
    component: HaloInfinite,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
