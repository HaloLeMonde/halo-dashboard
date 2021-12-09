import backend from "@/services/backend";

export const namespaced = true;
export const state = {
  listRecentMatches: [],
};

export const mutations = {
  SET_LIST_RECENT_MATCHES(state, listRecentMatches) {
    state.listRecentMatches = listRecentMatches;
  },
};

export const actions = {
  getRecentMatches({ commit }) {
    backend.getRecentMatches("Zeny IC").then((listRecentMatches) => {
      commit("SET_LIST_RECENT_MATCHES", listRecentMatches);
      return listRecentMatches;
    });
  },
};
