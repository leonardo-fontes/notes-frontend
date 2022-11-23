import { AxiosError } from "axios";
import { UserDTO } from "../../context/user";
import { api } from "../api";

type AuthResponse = {
    user: UserDTO;
    token: string;
    refreshToken: string;
};

export default async function auth({
    username,
    password,
}: {
    username: string;
    password: string;
}): Promise<UserDTO | undefined> {
    try {
        const {
            data: { token, refreshToken, user },
        } = await api.post<AuthResponse>("/login", {
            username,
            password,
        });
        api.defaults.headers.common["authorization"] = `Bearer ${token}`;

        localStorage.setItem("token", token);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("username", user.username);
        return user;
    } catch (err) {
        if (err instanceof AxiosError) {
            const msg = err.response?.data?.error || err.response?.data.message;
            if (msg) {
                console.log(msg);
                const translated = msg == "Invalid password!" ? "Senha inválida!" : msg === "User not found!" ? "Usuário não encontrado!" : msg;
                throw new Error(translated);
            }
            throw new Error(err.message);
        }
    }
}
