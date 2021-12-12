<template>
  <v-list>
    <v-list-item v-for="item in matches.data" :key="item.played_at">
      <recent-matches-hmcc-item v-bind:match="item" />
    </v-list-item>
  </v-list>
</template>

<script>
import RecentMatchesHmccItem from "./RecentMatchesHmccItem.vue";
export default {
  components: { RecentMatchesHmccItem },
  props: {
    matches: [],
  },
};
</script>
