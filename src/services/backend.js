import Axios from "axios";

const apiClient = Axios.create({
    baseURL: `${process.env.API_URL}`,
    timeout: 3000,
});

export default {
    instance: apiClient,
    haloInfinite = `${process.env.API_URL}/hi/`
    
}