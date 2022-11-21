import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDTO, useUser } from "../context/user";
import { toast } from "react-toastify";
import auth from "../service/login/auth";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    useEffect(() => {
        if (Object.values(user).length) {
            navigate("/home");
        }
    }, []);
    return (
        <div className="w-full h-screen justify-center items-center flex flex-col">
            <h1 className="px-4 py-2">Login</h1>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    const { username, password } = Object.fromEntries(
                        new FormData(event.target as HTMLFormElement).entries(),
                    );
                    try {
                        const user = await auth({
                            username: username as string,
                            password: password as string,
                        });
                        setUser(user);
                        localStorage.setItem("username", user.username);
                        navigate("/home");
                        toast("Login feito com sucesso", { type: "success" });
                    } catch (err) {
                        toast(`Erro ao logar: ${(err as Error).message}`, {
                            type: "error",
                        });
                    }
                }}
                className="flex flex-col gap-4"
            >
                <input
                    name="username"
                    className="border-[1px] px-4 py-2 border-slate-400 border-opacity-25 rounded-md"
                    type="text"
                    placeholder="Username"
                />
                <input
                    name="password"
                    className="border-[1px] px-4 py-2 border-slate-400 border-opacity-25 rounded-md"
                    type={"password"}
                    placeholder="Password"
                />
                <button
                    type="submit"
                    className="w-full bg-sky-400 text-white px-4 py-[6px] rounded-md"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
