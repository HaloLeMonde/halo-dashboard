<template>
  <v-container fluid>
    <motd />
    <search-bar @clicked="getPlayerData" />
    <player-card
      v-if="searchedPlayer !== null"
      v-bind:playerData="searchedPlayer"
    />
  </v-container>
</template>

<script>
import Motd from "../components/Motd.vue";
import PlayerCard from "../components/PlayerCard.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: { SearchBar, PlayerCard, Motd },
  data() {
    return {
      searchedPlayer: null,
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
