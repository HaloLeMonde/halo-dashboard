<template>
  <v-container v-if="match !== null">
    <v-card>
      <div class="d-flex justify-space-between align-center">
        <div>
          <v-card-title
            class="text-h5"
            :style="[
              match.victory === true
                ? { color: '#00FF00' }
                : { color: '#FF0000' },
            ]"
            v-text="
              'Game du : ' +
              new Date(match.played_at).toLocaleDateString('fr-FR')
            "
          ></v-card-title>

          <v-card-text>
            <p>
              Stats : {{ match.stats.kills }}/{{ match.stats.deaths }}/{{
                match.stats.assists
              }}
            </p>
            <p>Map : {{ match.details.map.name }}</p>
            <p>Durée : {{ match.duration.human }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="shareMatch(match)"
              class="ml-2 mt-5"
              outlined
              rounded
              small
            >
              Partager
            </v-btn>
          </v-card-actions>
        </div>
        <v-avatar class="ma-3" size="50%" tile>
          <v-img :src="match.details.engine.logo_url"></v-img>
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
    shareMatch(match) {
      if (!("share" in navigator)) {
        alert("Web Share API not supported.");
        return;
      }
      navigator
        .share({
          title: `Match sur ${match.details.map.name}`,
          text: `Regarde ce match d'une durée ${match.duration.human} avec un kda ${match.stats.kda}`,
        })
        .then(() => console.log("Partage réussi"))
        .catch((error) => console.log("Erreur de partage:", error));
    },
  },
};
</script>
