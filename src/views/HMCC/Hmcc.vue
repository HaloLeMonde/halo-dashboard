<template>
  <v-container fluid class="hmcc__root">
    <h1>HMCC Dashboard</h1>
    <motd-hmcc />
    <search-bar-hmcc @clicked="getPlayerData" />
    <player-card-hmcc
      v-if="searchedPlayer !== null"
      v-bind:playerData="searchedPlayer"
      v-bind:noButton="true"
    />
  </v-container>
</template>

<script>
import MotdHmcc from "../../components/MotdHmcc.vue";
import SearchBarHmcc from "../../components/SearchBarHmcc.vue";
import PlayerCardHmcc from "../../components/PlayerCardHmcc.vue";

export default {
  components: {
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

<style lang="scss">
.hmcc {
  &__root {
    min-height: 100vh;
  }
}
</style>
