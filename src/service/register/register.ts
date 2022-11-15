import { api } from "../api";
import { AxiosError } from "axios";

type RegisterInput = {
    username: string;
    email: string;
    password: string;
};

type inUse = {
    email: boolean;
    username: boolean;
}

export class AlreadyExists extends AxiosError {}


export default async function register({
    username,
    password,
    email
}: {
    username: string;
    email: string;
    password: string;
}): Promise<void> {
    try {
        const response = await api.post<RegisterInput>("/register", {
            username,
            email,
            password,
        });
        
    } catch (err) {
        if (err instanceof AxiosError) {
            const data = err.response?.data?.inUse;
            if (data) {
                const inUse: inUse = data;
                const emailInUse = inUse.email;
                const usernameInUse = inUse.username;
                const message = (emailInUse && usernameInUse) ? "Email e nome de usuário já estão em uso!" :
                    emailInUse ? "Email já está em uso!" : usernameInUse ? "Nome de usuário já está em uso!" : "Erro desconhecido";
                throw new AlreadyExists(message);
            }
        }
        throw new Error((err as any).message);
    }
}