import Axios from "axios";

const apiClient = Axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`,
  //timeout: 3000,
  headers: {
    Authorization:
      "Cryptum-Token 6WMbEb98FNACgUlJz2XdxhD9fuox8GT2ewuRMqu1hOz1lBi0DOKSACULEHwg7gn4",
    "Content-Type": "application/json",
    "Cryptum-API-Version": "2.3-alpha",
  },
});

export default {
  instance: apiClient,
  url: {
    haloInfinite: "/hi/",
    haloHMCC: "/hmcc/",
    haloFive: "/h5/",
  },

  getHIUser(gamerTag) {
    return this.instance
      .get(`${this.url.haloInfinite}stats/players/${gamerTag}/csrs?season=1`)
      .then((response) => {
        console.log("response.data :>> ", response.data);
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
  getApparence(gamerTag) {
    return this.instance
      .get(`${this.url.haloHMCC}appearance/players/${gamerTag}`)
      .then((apparence) => {
        return apparence.data;
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
