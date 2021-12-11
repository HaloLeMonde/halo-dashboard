const PUSH_KEY = `${process.env.VUE_APP_PUSH_SERVER_KEY}`;
import Push from "@/services/push";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);

  // eslint-disable-next-line
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const defaultState = () => ({
  registration: null,
  subscription: null,
});

export const namespaced = true;
export const state = defaultState;

export const mutations = {
  SET_REGISTRATION(state, registration) {
    state.registration = registration;
  },
  SET_SUBSCRIPTION(state, subscription) {
    state.subscription = subscription;
  },
  RESET(state) {
    const initial = defaultState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },
};

export const actions = {
  register({ commit }, registration) {
    commit("SET_REGISTRATION", registration);
  },

  checkNotificationsSubscription({ commit, state }) {
    if (Notification.permission === "denied") {
      return Promise.reject(new Error("Notification denied"));
    }

    if (state.registration === null) {
      return Promise.reject(new Error("Worker not found"));
    }

    if (state.registration.pushManager === undefined) {
      return Promise.reject(new Error("Push manager not found"));
    }

    return state.registration.pushManager
      .getSubscription()
      .then((subscription) => {
        commit("SET_SUBSCRIPTION", subscription);
        return subscription;
      });
  },

  subscribeNotifications({ commit, dispatch, state }) {
    return dispatch("checkNotificationsSubscription").then((subscription) => {
      if (subscription !== null) {
        return { subscription, active: true };
      } else {
        const applicationServerKey = urlBase64ToUint8Array(PUSH_KEY);
        return state.registration.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey,
          })
          .then((subscription) => {
            return Push.subscribe(subscription).then(() => {
              commit("SET_SUBSCRIPTION", subscription);
              return { subscription, active: true };
            });
          });
      }
    });
  },

  unsubscribeNotifications({ commit, dispatch }) {
    return dispatch("checkNotificationsSubscription").then((subscription) => {
      if (subscription !== null) {
        subscription.unsubscribe();
        Push.unsubscribe(subscription);
      }
      commit("SET_SUBSCRIPTION", null);

      return { subscription, active: false };
    });
  },
};