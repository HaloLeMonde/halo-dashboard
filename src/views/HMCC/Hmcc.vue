<template>
  <div class="hmcc">
    <h1>HMCC Dashboard</h1>
    <recent-matches />
  </div>
</template>

<script>
import RecentMatches from "./_RecentMatches.vue";

export default {
  components: {
    RecentMatches,
  },
};
</script>