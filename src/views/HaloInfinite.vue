<template>
    <div id="recentMatches">
        <h1>Matchs récent</h1>
        <pre> {{ listPlayerMatches }} </pre>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: mapState({
        listPlayerMatches: (state) => state.infinite.listPlayerMatches,
    }),
    mounted() {
        if (this.listPlayerMatches.length === 0) {
            this.$store.dispatch("infinite/getMatches");
        }
    },
};
</script>
