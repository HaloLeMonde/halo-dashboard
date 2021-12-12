import backend from "@/services/backend";

export const namespaced = true;
export const state = {
  listPlayerMatches: [],
  searchedPlayer: {},
  motd: {},
};

export const mutations = {
  SET_LIST_PLAYER_MATCHES(state, listPlayerMatches) {
    state.listPlayerMatches = listPlayerMatches;
  },

  SET_SEARCHED_PLAYER(state, searchedPlayer) {
    state.searchedPlayer = searchedPlayer;
  },

  SET_MOTD(state, motd) {
    state.motd = motd;
  },
};

export const actions = {
  getMatches({ commit }, gamerTag) {
    backend.getHIPlayerMatches(gamerTag).then((listPlayerMatches) => {
      commit("SET_LIST_PLAYER_MATCHES", listPlayerMatches);
      return listPlayerMatches;
    });
  },
  getPlayer({ commit }, gamerTag) {
    backend
      .getHIUser(gamerTag)
      .then((searchedPlayer) => {
        commit("SET_SEARCHED_PLAYER", searchedPlayer);
        return searchedPlayer;
      })
      .catch((error) => {
        const searchedPlayer = { error: error };
        commit("SET_SEARCHED_PLAYER", searchedPlayer);
      });
  },

  getMotd({ commit }) {
    backend.getMOTD("haloInfinite").then((motd) => {
      commit("SET_MOTD", motd);
      return motd;
    });
  },
};

export const getters = {
  getUserData(state) {
    return state.searchedPlayer;
  },
};
