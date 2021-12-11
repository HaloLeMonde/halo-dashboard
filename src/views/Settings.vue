<template>
  <div>
    <p>Notifications ? : {{ notifActive }}</p>
    <button v-if="notifActive" @click="unsubscribe">Unsubscribe</button>
    <button v-else @click="subscribe">Subscribe</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    notifActive: (state) => state.worker.subscription !== null,
  }),
  methods: {
    subscribe() {
      this.$store
        .dispatch("worker/subscribeNotifications")
        .then((subscription) => {
          console.log(subscription);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    unsubscribe() {
      this.$store
        .dispatch("worker/unsubscribeNotifications")
        .then((subscription) => {
          console.log(subscription);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>