import { AxiosError } from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDTO, useUser } from "../context/user";
import { api } from "../service/api";
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
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    const { username, password } = Object.fromEntries(
                        new FormData(event.target as HTMLFormElement).entries(),
                    );
                    const user = await auth({
                        username: username as string,
                        password: password as string,
                    });
                    setUser(user);
                    navigate("/home");
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
