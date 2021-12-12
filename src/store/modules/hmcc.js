import backend from "@/services/backend";

export const namespaced = true;
export const state = {
  listRecentMatches: [],
  apparence: [],
  statistic: [],
};

export const mutations = {
  SET_LIST_RECENT_MATCHES(state, listRecentMatches) {
    state.listRecentMatches = listRecentMatches;
  },
  SET_APPARENCE(state, apparence) {
    state.apparence = apparence;
  },
  SET_STATS(state, statistic) {
    state.statistic = statistic;
  },
};

export const actions = {
  getRecentMatches({ commit }) {
    backend.getRecentMatches("Zeny IC").then((listRecentMatches) => {
      commit("SET_LIST_RECENT_MATCHES", listRecentMatches);
      return listRecentMatches;
    });
  },
  getApparence({ commit }) {
    backend.getApparence("Zeny IC").then((apparence) => {
      commit("SET_APPARENCE", apparence);
      return apparence;
    });
  },

  getStats({ commit }) {
    backend.getStats("Zeny IC").then((statistic) => {
      commit("SET_STATS", statistic);
      return statistic;
    });
  },
};
