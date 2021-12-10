<template>
  <div id="apparence">
    <h1>Skin</h1>
    <pre> {{ apparence }} </pre>
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
