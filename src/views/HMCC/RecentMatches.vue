<template>
  <v-container fluid>
    <player-card-hmcc v-bind:playerData="user" v-bind:noButton="false" />
    <recent-matches-hmcc v-bind:player="user.additional.gamertag" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PlayerCardHmcc from "../../components/PlayerCardHmcc.vue";
import RecentMatchesHmcc from "../../components/RecentMatchesHmcc.vue";
export default {
  components: {
    PlayerCardHmcc,
    RecentMatchesHmcc,
  },
  computed: {
    ...mapGetters({
      getUserData: "hmcc/getUserData",
    }),
    user() {
      return this.getUserData;
    },
  },
  mounted() {
    if (!this.user) {
      this.$router.push({ name: "hmcc" });
    }
  },
};
</script>
