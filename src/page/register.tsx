import React from "react";
import { useNavigate } from "react-router-dom";
import register, { AlreadyExists } from "../service/register/register";

const Register: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen justify-center items-center flex flex-col">
            <h1 className="px-4 py-2">Registro</h1>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    const { username, password, email } = Object.fromEntries(
                        new FormData(event.target as HTMLFormElement).entries(),
                    );
                    try {
                        const handleRegister = await register({
                            username: username as string,
                            password: password as string,
                            email: email as string
                        });
                        alert("Usuário registrado com sucesso! :)")
                        setTimeout(() => {
                            navigate("/login");
                        }, 300);
                    } catch (e) {
                        if (e instanceof AlreadyExists) {
                            alert(e.message);
                        }
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
                    name="email"
                    className="border-[1px] px-4 py-2 border-slate-400 border-opacity-25 rounded-md"
                    type="text"
                    placeholder="E-mail"
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
                    Registrar
                </button>
            </form>
        </div>
    );
}

export default Register;
