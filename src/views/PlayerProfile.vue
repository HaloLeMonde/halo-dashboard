<template>
  <v-container fluid>
    <player-card v-bind:playerData="user" v-bind:noButton="false" />
    <recent-matches v-bind:player="user.additional.gamertag" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PlayerCard from "../components/PlayerCard.vue";
import RecentMatches from "../components/RecentMatches.vue";
export default {
  components: { PlayerCard, RecentMatches },
  computed: {
    ...mapGetters({
      getUserData: "infinite/getUserData",
    }),
    user() {
      return this.getUserData;
    },
  },
  mounted() {
    if (!this.user) {
      this.$router.push({ name: "HaloInfinite" });
    }
  },
};
</script>
