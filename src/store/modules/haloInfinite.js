import backend from "@/services/backend";

export const namespaced = true;
export const state = {
  listPlayerMatches: [],
};

export const mutations = {
  SET_LIST_PLAYER_MATCHES(state, listPlayerMatches) {
    state.listPlayerMatches = listPlayerMatches;
  },
};

export const actions = {
    getMatches({ commit }) {
        backend.getHIPlayerMatches("Zeny IC").then((listPlayerMatches) => {
            commit("SET_LIST_PLAYER_MATCHES", listPlayerMatches);
            return listPlayerMatches;
        });
    },
};
