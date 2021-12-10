<template>
  <v-container>
    <v-card dark>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
            class="text-h5"
            v-text="playerData.additional.gamertag"
          ></v-card-title>

          <v-card-subtitle>
            Plateforme : {{ playerData.additional.input }} -- Queue :
            {{ playerData.additional.queue }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              class="ml-2 mt-5"
              outlined
              rounded
              small
              :to="{
                name: 'PlayerProfile',
                params: { gamertag: playerData.additional.gamertag },
              }"
            >
              Voir le profil
            </v-btn>
          </v-card-actions>
        </div>
        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="playerData.data.current.tier_image_url"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    playerData: Object,
  },
};
</script>
