import { api } from "./api";

export default async function refreshToken(error: any) {
    return new Promise(async (resolve, reject) => {
        try {
            const refreshToken = localStorage.getItem("refresh_token");

            try {
                const res = await api.post("/token", {
                    refreshToken,
                });
                
                localStorage.setItem("token", res.data.token);
                api.defaults.headers.common["authorization"] = res.data.token;
                return resolve(res);
            } catch (err) {
                return reject(error);
            }
        } catch (err) {
            return reject(err);
        }
    });
}
