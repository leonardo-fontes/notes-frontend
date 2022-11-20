import axios from "axios";
import refreshToken from "./refreshToken";

export const api = axios.create({
    baseURL: "http://localhost:3333/api",
    headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        if (error.response.status === 401) {
            const response = await refreshToken(error);
            if (!window.location.pathname.includes("/login")) {
                window.location.href = "/login";
            }
            return response;
        }
        return Promise.reject(error);
    },
);
