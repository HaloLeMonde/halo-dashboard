<template>
  <v-container fluid>
    <motd />
    <search-bar @clicked="getPlayerData" />
    <player-card v-bind="searchedPlayer" />
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
      searchedPlayer: {},
    };
  },
  watch: {
    searchedPlayer(val) {
      console.log(`this.searchedPlayer`, val);
    },
  },
  methods: {
    getPlayerData(event) {
      this.searchedPlayer = event;
    },
  },
};
</script>
