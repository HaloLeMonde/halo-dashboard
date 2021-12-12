<template>
  <v-container v-if="playerData !== null">
    <v-card dark>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="playerData.additional.appearance.avatar_url"></v-img>
          </v-avatar>
          <v-card-title
            class="text-h5"
            v-text="'Gamertag : ' + playerData.additional.gamertag"
          ></v-card-title>

          <v-card dark>
            <div class="">
              <v-card-title class="text-h7" v-text="'Campagne'"></v-card-title>
              <v-card-subtitle>
                Kill : {{ playerData.data.campaign.missions.kills }}
              </v-card-subtitle>
              <v-card-subtitle>
                Deaths : {{ playerData.data.campaign.missions.deaths }}
              </v-card-subtitle>
              <v-card-subtitle>
                Completed : {{ playerData.data.campaign.missions.completed }}
              </v-card-subtitle>
            </div>
          </v-card>

          <v-card dark>
            <div class="">
              <v-card-title
                class="text-h7"
                v-text="'Multijoueur'"
              ></v-card-title>
              <v-card-subtitle>
                Kill : {{ playerData.data.multiplayer.summary.kills }}
              </v-card-subtitle>
              <v-card-subtitle>
                Deaths :
                {{ playerData.data.multiplayer.summary.deaths }}
              </v-card-subtitle>
              <v-card-subtitle>
                Assists :
                {{ playerData.data.multiplayer.summary.assists }}
              </v-card-subtitle>
              <v-card-subtitle>
                KDR :
                {{ playerData.data.multiplayer.kdr }}
              </v-card-subtitle>
            </div>
          </v-card>

          <v-card dark>
            <div class="">
              <v-card-title class="text-h7" v-text="'Rang'"></v-card-title>
              <v-card-subtitle>
                Rang Max :
                {{ playerData.data.multiplayer.ranked.highest_rank.playlist }}
              </v-card-subtitle>
            </div>
          </v-card>
          <v-card-actions>
            <v-btn
              v-if="noButton"
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
          <v-img :src="playerData.additional.appearance.emblem_url"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "PlayerCardHmcc",
  props: {
    playerData: Object,
    noButton: Boolean,
  },
};
</script>
