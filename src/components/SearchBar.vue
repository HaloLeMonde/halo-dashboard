<template>
  <v-container class="search__root .justify-center">
    <v-row class="search__row">
      <v-text-field
        class="search__input"
        label="Rechercher un joueur"
        hide-details="auto"
        append-icon="mdi-magnify"
        outlined
        v-on:keyup.enter="onEnter"
        v-model="searchInput"
        :loading="isLoading"
      >
      </v-text-field>
    </v-row>
    <v-alert type="error" v-if="showErrorInput">Entrez un gamertag</v-alert>
    <v-alert type="error" v-if="noPlayer"
      >Pas de joueur trouvé avec ce gamertag</v-alert
    >
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      searchInput: "",
      showErrorInput: false,
      noPlayer: false,
      isLoading: false,
    };
  },
  computed: mapState({
    searchedPlayer: (state) => state.infinite.searchedPlayer,
  }),
  watch: {
    searchedPlayer(apiResponse) {
      if (!this.containError(apiResponse)) {
        this.noPlayer = false;
        this.loading = false;
        this.$emit("clicked", apiResponse);
      } else {
        this.noPlayer = true;
      }
    },
  },
  methods: {
    onEnter: function () {
      this.loading = true;
      if (this.searchInput.length === 0) {
        this.showErrorInput = true;
        return;
      }
      this.showErrorInput = false;
      this.$store.dispatch("infinite/getPlayer", this.searchInput);
    },
    containError: function (object) {
      return "error" in object;
    },
  },
};
</script>

<style lang="scss">
.search {
  &__root {
    margin-top: 20px;
  }

  &__input {
    margin-bottom: 30px !important;
  }
}

@media (width: 601px) {
  .search {
    &__input {
      width: 50%;
    }
  }
}
</style>
