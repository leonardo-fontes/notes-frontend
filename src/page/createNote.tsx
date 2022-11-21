import React from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../service/note/createNote";
import { toast } from "react-toastify";
const CreateNote: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-20 justify-center items-center flex flex-col">
            <h1 className="py-5">Crie uma nota!</h1>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    const { title, content } = Object.fromEntries(
                        new FormData(event.target as HTMLFormElement).entries(),
                    );
                    try {
                        await createNote(title as string, content as string);
                        setTimeout(() => {
                            navigate("/home");
                        }, 300);
                        toast("Nota criada com succeso", { type: "success" });
                    } catch (e) {
                        if (e instanceof Error) {
                            toast(`Erro ao criar a nota: ${e.message}`, {
                                type: "error",
                            });
                        }
                    }
                }}
                className="flex flex-col gap-4"
            >
                <input
                    name="title"
                    className="border-[1px] px-4 py-2 border-slate-400 border-opacity-25 rounded-md"
                    type="text"
                    placeholder="Título da nota"
                />
                <textarea
                    name="content"
                    className="border-[1px] px-4 py-2 border-slate-400 border-opacity-25 rounded-md"
                    placeholder="Conteúdo da nota..."
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-sky-400 text-white px-4 py-[6px] rounded-md"
                >
                    Registrar
                </button>
            </form>
        </div>
    );
};

export default CreateNote;
