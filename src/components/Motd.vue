<template>
  <v-banner color="secondary" class="slider__root">
    <transition-group name="slide" tag="div" class="motd-slider">
      <div v-for="number in [currentTxt]" :key="number">
        <p>
          {{ motd.data[currentTxt].title }} :
          {{ motd.data[currentTxt].message }}
        </p>
      </div>
    </transition-group>
  </v-banner>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentTxt: 0,
    };
  },
  computed: mapState({
    motd: (state) => state.infinite.motd,
  }),
  created() {
    this.$store.dispatch("infinite/getMotd");
  },
  mounted() {
    setInterval(() => {
      if (this.currentTxt + 1 > this.motd.data.length) {
        this.currentTxt = 0;
      } else {
        this.currentTxt++;
      }
    }, 5000);
  },
};
</script>

<style lang="scss">
.slider {
  &__root {
    height: 225px;
    overflow: hidden;
  }
}
.motd-slider {
  overflow: hidden;
  position: relative;
  height: 200px;
  width: 100%;

  & p {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #ffffff;
  }
}

.slide-leave-active,
.slide-enter {
  transform: translate(100%, 0);
  &-active {
    transition: 1s;
  }
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

@media (min-width: 601px) {
  .slider {
    &__root {
      height: 75px;
      overflow: hidden;
    }
  }
}
</style>
