<template>
  <v-container fluid>
    <h1>HMCC Dashboard</h1>
    <motd-hmcc />
    <search-bar-hmcc @clicked="getPlayerData" />
    <player-card-hmcc
      v-if="searchedPlayer !== null"
      v-bind:playerData="searchedPlayer"
      v-bind:noButton="true"
    />

    <!-- <recent-matches /> -->
    <!-- <apparence /> -->
    <!-- <stats /> -->
  </v-container>
</template>

<script>
//import RecentMatches from "./_RecentMatches.vue";
//import Apparence from "./_Apparence.vue";
//import Stats from "./_Stats.vue";
import MotdHmcc from "../../components/MotdHmcc.vue";
import SearchBarHmcc from "../../components/SearchBarHmcc.vue";
import PlayerCardHmcc from "../../components/PlayerCardHmcc.vue";

export default {
  components: {
    //RecentMatches,
    //Apparence,
    //Stats,
    MotdHmcc,
    SearchBarHmcc,
    PlayerCardHmcc,
  },
  data() {
    return {
      searchedPlayer: null,
      hmcc: "hmcc",
    };
  },
  watch: {
    searchedPlayer(val) {
      this.searchedPlayer = val;
    },
  },
  methods: {
    getPlayerData(event) {
      this.searchedPlayer = event;
    },
  },
};
</script>
