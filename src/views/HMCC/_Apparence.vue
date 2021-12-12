<template>
  <div id="apparence">
    <h1>Skin</h1>
    <!-- <pre> {{ apparence }} </pre> -->
    <v-list-item-avatar>
      <v-img :src="apparence.data.avatar_url" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title
        >{{ apparence.additional.gamertag }} Clan :
        {{ apparence.data.clan_tag }}</v-list-item-title
      >
    </v-list-item-content>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    apparence: (state) => state.hmcc.apparence,
  }),
  mounted() {
    if (this.apparence.length === 0) {
      this.$store.dispatch("hmcc/getApparence");
    }
  },
};
</script>
