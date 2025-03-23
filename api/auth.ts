import axios from "axios";
import api from "utils/api";

interface RegisterValues {
    username:   string;
    email:      string;
    password:   string;
    churchId:   string;
    sabbath:    Date;
}

export const register = async (user: RegisterValues) => {
    const response = await api.post("/users", user);
    return response.data;
}