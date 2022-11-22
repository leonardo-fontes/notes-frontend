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
}): Promise<UserDTO> {
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
        throw new Error((err as any).message);
    }
}
