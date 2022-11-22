import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useNotes } from "../context/notes";
import { useUser } from "../context/user";

const Navbar: React.FC = () => {
    const { user } = useUser();
    const { searchNote, setLoading } = useNotes();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    let timer: number;
    
    return !pathname.includes("/login") && !pathname.includes("/register") ? (
        <div className="px-8 py-4 border-b-2 border-b-slate-400 border-opacity-10 flex flex-row justify-between items-center">
            <img
                className="cursor-pointer"
                onClick={() => navigate("/home")}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAB+ElEQVRYhe2Xv24TQRCHv729IEXgBJCCQEihSSRAooEmHe/hji4tL0GBxFOgPAgvEVEgGQpkgZLIf0IKyzdDEztmb/a85zuTxj/J8mh8u/tpdue3Pthoo2ZyYUKVjB5dHE+RipGx34rE55WfvOTEOXQxnZcG9ugqfDYmSIudnXdh3gGnKHCyuEwW8ohy8C9zDZhI7OLPHIbrl4BKWh+MqWqgdcMY5zAOtG6YSJVsoFuCsYEWy/ifYcBqe2PgdOKRIls6eRWM94L3RSmfBhRMOOjvIlLy0FrKMmXv8UUlTBwoALv/ZIhMs1J+ppRt8l7KeaPLkrYszwvIC3OhWmdm3V3WNgxYFRJK99H4/B5FxZYtlYLPhZ3dy6Vj04wxJZ8yT0KVkrqs8/ByHreyTW3dZa3DrNpl04lHJW6MlumNr7bo9XcoZs2pCnr9fa3O9uQO/EkACo3xd7UxhqY3vtri+NNbLkY5IoKqIiLzj6ry4tnw7Oj18ONyoKDLHPDg0fDm6jCAQ9P78auTAnP47v33Qbh85ZbNuKqM0YqlIA6zPzqPwUCFMTY9wFGYN4ODGEwU6LZgTKB5oqG3rAJjAjWG0ZsK1YWxgRr+Y5yHK8DYQPCtKQwKz/dHZ3VhwH6VdpzSxfEKiL8ySyQGev272Zevex/qwmy0URv6C/AxsJEbDVIvAAAAAElFTkSuQmCC"
            />
            <input
                className="w-1/3 border-[1px] px-4 py-2 border-slate-400 border-opacity-25 rounded-md"
                placeholder="Pesquisa"
                onChange={(event) => {
                    const value = event.currentTarget.value;
                    setLoading(true);

                    if (timer) {
                        clearTimeout(timer);
                    }
                    if (!value) {
                        searchNote("");
                        setLoading(false);
                        return;
                    }
                    timer = setTimeout(() => {
                        searchNote(value);
                        setLoading(false);
                    }, 1000);
                }}
            />
            <div className="flex items-center gap-2">
                <h3>Olá, {localStorage.getItem('username')}!</h3>
                <button
                    onClick={() => navigate("/note")}
                    className="bg-sky-400 text-white px-4 py-[6px] rounded-md"
                >
                    Nova nota
                </button>
                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("refresh_token");
                        localStorage.removeItem("username");
                        navigate("/login");
                    }}
                    className="bg-red-400 text-white px-4 py-[6px] rounded-md"
                >
                    Sair
                </button>
            </div>
        </div>
    ) : null;
};

export default Navbar;
