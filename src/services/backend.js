import Axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiClient = Axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`,
  timeout: 3000,
  headers: {
    Authorization:
    `Cryptum-Token ${process.env.VUE_APP_API_TOKEN}`,
    "Content-Type": "application/json",
    "Cryptum-API-Version": "2.3-alpha",
  },
});

export default {
  console.log('apiclient :>> ', apiclient.Authorization);
  instance: apiClient,
  url: {
    haloInfinite: "/hi/",
    haloHMCC: "/hmcc/",
    haloFive: "/h5/",
  },

  /**
   * Halo Infinite
   */
  getHIUser(gamerTag) {
    return this.instance
      .get(`${this.url.haloInfinite}stats/players/${gamerTag}/csrs?season=1`)
      .then((response) => {
        console.log("response.data :>> ", response.data);
      });
  },

  getHIPlayerMatches(gamerTag) {
    return this.instance
      .get(`${this.url.haloInfinite}stats/players/${gamerTag}/matches`)
      .then((response) => {
        return response.data;
      });
  },

  getRecentMatches(gamerTag) {
    return this.instance
      .get(
        `${this.url.haloHMCC}stats/players/${gamerTag}/recent-matches?page=1`
      )
      .then((recentMatches) => {
        return recentMatches.data;
      });
  },
};
