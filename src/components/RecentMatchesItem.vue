<template>
  <v-container v-if="match !== null">
    <v-card>
      <div class="d-flex justify-space-between align-center">
        <div>
          <v-card-title
            class="text-h5"
            :style="[
              match.outcome === 'win'
                ? { color: '#00FF00' }
                : { color: '#FF0000' },
            ]"
            v-text="toFirstUpperCase(match.outcome)"
          ></v-card-title>

          <v-card-text>
            <p>Stats : {{ match.stats.summary.kills }}/{{
                match.stats.summary.deaths
              }}/{{ match.stats.summary.assists }}
            </p>
            <p>Durée :{{ match.duration.human }}</p>
          </v-card-text>
        </div>
        <v-avatar class="ma-3" size="50%" tile>
          <v-img :src="match.details.map.asset.thumbnail_url"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    match: {},
  },
  methods: {
    toFirstUpperCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>
