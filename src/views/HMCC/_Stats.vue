<template>
  <div id="stats">
    <h1>Statistiques du joueur</h1>
    <pre> {{ statistic }} </pre>

    <div>
      <h2>Campagne</h2>

      <h2>Multiplayer</h2>
      <h3>Récap</h3>
      <pre>{{ statistic.data.multiplayer.summary }}</pre>

      <v-card elevation="10" max-width="500" class="mx-auto">
        <v-list> </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    statistic: (state) => state.hmcc.statistic,
  }),
  mounted() {
    if (this.statistic.length === 0) {
      this.$store.dispatch("hmcc/getStats");
    }
  },
  data(statistic) {
    return {
      headers: [
        {
          text: "Kills",
          align: "start",
          value: "kills",
        },
        { text: "Death", value: "death" },
        { text: "Assists", value: "assists" },
        { text: "Losses", value: "losses" },
        { text: "Wins", value: "wins" },
      ],
      stats: [
        {
          kills: statistic.data.multiplayer.summary.kills,
        },
      ],
    };
  },
};
</script>
