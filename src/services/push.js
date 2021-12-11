import Axios from "axios";

const apiClient = Axios.create({
  baseURL: `${process.env.VUE_APP_PUSH_SERVER}`,
  timeout: 3000,
});

export default {
  instance: apiClient,

  subscribe(subscription) {
    const temp = JSON.parse(JSON.stringify(subscription));
    return this.instance.post("subscribe", temp);
  },

  unsubscribe({ endpoint }) {
    return this.instance.post("unsubscribe", { endpoint });
  },
};