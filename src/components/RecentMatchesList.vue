<template>
  <v-list>
    <v-list-item v-for="item in matches.data" :key="item.id">
      <recent-matches-item v-bind:match="item" />
    </v-list-item>
  </v-list>
</template>

<script>
import RecentMatchesItem from "./RecentMatchesItem.vue";
export default {
  components: { RecentMatchesItem },
  props: {
    matches: [],
  },
};
</script>
