import Axios from "axios";

const apiClient = Axios.create({
    baseURL: `${process.env.API_URL}`,
    timeout: 3000,
});

export default {
    instance: apiClient,
    url : {
        haloInfinite : '/hi/',
        haloHMCC: '/hmcc/',
        haloFive : '/h5/'
    },
    
    getHIUser(gamerTag) {
        return this.instance
            .get(`${url.haloInfinite}stats/players/${gamerTag}/csrs?season=1`)
            .then((response) => {
                    console.log('response.data :>> ', response.data);
        });
    },
}