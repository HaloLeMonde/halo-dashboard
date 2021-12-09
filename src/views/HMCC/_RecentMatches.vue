<template>
  <div id="recentMatches">
    <h1>Matchs récent</h1>
    <pre> {{ listRecentMatches }} </pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    listRecentMatches: (state) => state.hmcc.listRecentMatches,
  }),
  mounted() {
    if (this.listRecentMatches.length === 0) {
      this.$store.dispatch("hmcc/getRecentMatches");
    }
  },
};
</script>
