import axios from "axios";

const instance = axios.create({
    baseURL:"https://the-resturant-backend.herokuapp.com",
});


export default instance;