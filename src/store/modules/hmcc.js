import backend from "@/services/backend";

export const namespaced = true;
export const state = {
  listRecentMatches: [],
  apparence: [],
  statistic: [],
  motdHmcc: {},
  searchedPlayer: {},
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
  SET_MOTD_HMCC(state, motdHmcc) {
    state.motdHmcc = motdHmcc;
  },
  SET_SEARCHED_PLAYER(state, searchedPlayer) {
    state.searchedPlayer = searchedPlayer;
  },
};

export const actions = {
  getRecentMatches({ commit }, gamerTag) {
    backend.getRecentMatches(gamerTag).then((listRecentMatches) => {
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

  getStats({ commit }, gamerTag) {
    backend.getStats(gamerTag).then((statistic) => {
      commit("SET_STATS", statistic);
      return statistic;
    });
  },
  getMotd({ commit }) {
    backend.getMOTD("haloHMCC").then((motdHmcc) => {
      commit("SET_MOTD_HMCC", motdHmcc);
      return motdHmcc;
    });
  },
  getPlayerStats({ commit }, gamerTag) {
    backend
      .getStats(gamerTag)
      .then((searchedPlayer) => {
        commit("SET_SEARCHED_PLAYER", searchedPlayer);
        return searchedPlayer;
      })
      .catch((error) => {
        const searchedPlayer = { error: error };
        commit("SET_SEARCHED_PLAYER", searchedPlayer);
      });
  },
};
export const getters = {
  getUserData(state) {
    return state.searchedPlayer;
  },
};
