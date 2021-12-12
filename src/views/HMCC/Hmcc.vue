<template>
  <div class="hmcc">
    <!-- Créer des blocs pour afficher chaque composant proprement -->
    <h1>HMCC Dashboard</h1>
    <!-- <recent-matches /> -->
    <apparence />
    <stats />
  </div>
</template>

<script>
//import RecentMatches from "./_RecentMatches.vue";
import Apparence from "./_Apparence.vue";
import Stats from "./_Stats.vue";

export default {
  components: {
    //RecentMatches,
    Apparence,
    Stats,
  },
};
</script>
