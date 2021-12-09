import Vue from "vue";
import Vuex from "vuex";
import * as hmcc from "./modules/hmcc";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { hmcc },
});
