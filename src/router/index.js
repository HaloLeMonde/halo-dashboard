import Vue from "vue";
import VueRouter from "vue-router";
import HMCC from "../views/HMCC/Hmcc.vue";
import HaloInfinite from "../views/HaloInfinite.vue";
import Halo5 from "../views/Halo5.vue";
import PlayerProfile from "../views/PlayerProfile.vue";
import RecentMatches from "../views/HMCC/RecentMatches.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/hmcc",
    name: "HMCC",
    component: HMCC,
  },
  {
    path: "/haloFive",
    name: "Halo5",
    component: Halo5,
  },
  {
    path: "/halo-infinite",
    name: "HaloInfinite",
    component: HaloInfinite,
  },
  {
    path: "/player/:gamertag",
    name: "PlayerProfile",
    component: PlayerProfile,
  },
  {
    path: "/recentMatches/:gamertag",
    name: "RecentMatches",
    component: RecentMatches,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
