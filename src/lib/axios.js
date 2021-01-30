import Axios from "axios";

export const axios = Axios.create({
    baseURL: "https://bugc-library.herokuapp.com/",
    headers: {
        Auth: ""
    },
    timeout: 3000
})