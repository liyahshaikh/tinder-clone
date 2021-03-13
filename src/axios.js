import axios from "axios";

const instance = axios.create({
    baseUrl: 'https://tinderclonebackendprimary.herokuapp.com'
});

export default instance;