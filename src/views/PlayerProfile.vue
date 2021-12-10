<template>
  <v-container></v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
