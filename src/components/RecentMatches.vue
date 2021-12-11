<template>
  <v-container>
    <h2>Derniers matchs</h2>
    <recent-matches-list
      v-bind:matches="listPlayerMatches"
      v-if="listPlayerMatches !== null"
    />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import RecentMatchesList from "./RecentMatchesList.vue";
export default {
  components: { RecentMatchesList },
  props: {
    player: String,
  },
  computed: mapState({
    listPlayerMatches: (state) => state.infinite.listPlayerMatches,
  }),
  mounted() {
    if (this.listPlayerMatches.length === 0) {
      this.$store.dispatch("infinite/getMatches", this.player);
    }
  },
};
</script>
