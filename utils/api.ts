import axios from "axios";
import { getIp } from "./helpers";

const api = axios.create({
    baseURL: getIp(),
    headers: {
        "Content-Type": "application/json"
    },
})

export default api;