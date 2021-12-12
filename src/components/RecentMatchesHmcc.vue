<template>
  <v-container>
    <h2>Matchs récent</h2>
    <recent-matches-hmcc-list
      v-bind:matches="listRecentMatches"
      v-if="listRecentMatches !== null"
    />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import RecentMatchesHmccList from "./RecentMatchesHmccList.vue";
export default {
  components: { RecentMatchesHmccList },
  props: {
    player: String,
  },
  computed: mapState({
    listRecentMatches: (state) => state.hmcc.listRecentMatches,
  }),
  mounted() {
    if (this.listRecentMatches.length === 0) {
      this.$store.dispatch("hmcc/getRecentMatches", this.player);
    }
  },
};
</script>
