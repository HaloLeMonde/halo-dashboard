<template>
  <v-container v-if="playerData !== null">
    <v-card dark class="playerCard__root">
      <v-container>
        <v-container class="playerCard__container">
          <v-container class="playerCard__container--gamertag">
            <v-avatar tile size="200">
              <v-img :src="playerData.additional.appearance.avatar_url"></v-img>
            </v-avatar>
            <v-card-title
              class="text-h5"
              v-text="'Gamertag : ' + playerData.additional.gamertag"
            ></v-card-title>
          </v-container>
          <v-container>
            <v-card dark>
              <div class="">
                <v-card-title
                  class="text-h7"
                  v-text="'Campagne'"
                ></v-card-title>
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
                  Max :
                  {{ playerData.data.multiplayer.ranked.highest_rank.playlist }}
                </v-card-subtitle>
              </div>
            </v-card>
          </v-container>
        </v-container>
        <v-card-actions>
          <v-btn
            v-if="noButton"
            class="ml-2 mt-5"
            outlined
            rounded
            small
            :to="{
              name: 'RecentMatches',
              params: { gamertag: playerData.additional.gamertag },
            }"
          >
            Match récents
          </v-btn>

          <v-btn
            v-if="noButton"
            class="ml-2 mt-5"
            outlined
            rounded
            small
            :to="{
              name: 'Apparence',
              params: { gamertag: playerData.additional.gamertag },
            }"
          >
            Apparence
          </v-btn>
        </v-card-actions>
      </v-container>
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

<style lang="scss">
.playerCard {
  &__container {
    display: flex;
    flex-direction: column;

    &--gamertag {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}

@media (min-width: 601px) {
  .playerCard {
    &__container {
      display: flex;
      flex-direction: row;
    }
    &__root {
      max-height: 710px;
    }
  }
}
</style>