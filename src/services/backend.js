import Axios from "axios";

const apiClient = Axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`,
  timeout: 3000,
  headers: {
    Authorization: `Cryptum-Token ${process.env.VUE_APP_API_TOKEN}`,
    "Content-Type": "application/json",
    "Cryptum-API-Version": "2.3-alpha",
  },
});

export default {
  instance: apiClient,
  url: {
    haloInfinite: "/hi/",
    haloHMCC: "/hmcc/",
   
  },

  /**
   * Halo Infinite
   */
  getHIUser(gamerTag) {
    return this.instance
      .get(`${this.url.haloInfinite}stats/players/${gamerTag}/csr`)
      .then((response) => {
        return response.data;
      });
  },

  getHIPlayerMatches(gamerTag) {
    return this.instance
      .get(
        `${this.url.haloInfinite}stats/players/${gamerTag}/matches?mode=matchmade`
      )
      .then((response) => {
        return response.data;
      });
  },

  fetchMOTD(url) {
    return this.instance.get(`${url}motd?language=fr-FR`).then((response) => {
      return response.data;
    });
  },

  getMOTD(game) {
    switch (game) {
      case "haloInfinite":
        return this.fetchMOTD(this.url.haloInfinite);
      case "haloHMCC":
        return this.fetchMOTD(this.url.haloHMCC);
      default:
        break;
    }
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

  getStats(gamerTag) {
    return this.instance
      .get(`${this.url.haloHMCC}stats/players/${gamerTag}/service-record`)
      .then((stats) => {
        return stats.data;
      });
  },
};
