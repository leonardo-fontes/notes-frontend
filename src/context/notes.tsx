import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useLocation } from "react-router-dom";
import { api } from "../service/api";
import { toast } from "react-toastify";

export type NotesDTO = { _id: string; title: string; content: string };
type UserContextT = {
    notes: NotesDTO[];
    searchNote: React.Dispatch<React.SetStateAction<string>>;
    deleteNote: (id: string) => Promise<void>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const NotesContext = createContext({
    notes: [],
    searchNote: () => {},
    deleteNote: async () => {},
    loading: false,
    setLoading: () => {},
} as UserContextT);

export const NotesProvider = ({ children }: PropsWithChildren) => {
    const [notes, setNotes] = useState<NotesDTO[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const { pathname } = useLocation();

    const deleteNote = async (id: string) => {
        try {
            await api.delete(`/notes/${id}`);
            setNotes((prev) => prev.filter(({ _id }) => _id !== id));
            toast("Nota deletada com sucesso", { type: "success" });
        } catch (err) {
            console.error(err);
            toast(`Erro ao deletar: ${(err as Error).message}`, {
                type: "error",
            });
        }
    };

    const filterNotes = useMemo(
        () =>
            search
                ? notes.filter(
                      (note) =>
                          note.title.includes(search) ||
                          note.content.includes(search),
                  )
                : notes,
        [notes, search],
    );

    useEffect(() => {
        if (window.location.href.includes("/home")) {
            api.get<{ notes: NotesDTO[] }>("/notes")
                .then(({ data: { notes } }) => {
                    setNotes(notes);
                })
                .catch((err) => console.log(err.message));
        }
    }, [pathname]);
    return (
        <NotesContext.Provider
            value={{
                notes: filterNotes,
                deleteNote,
                searchNote: setSearch,
                loading,
                setLoading,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => useContext(NotesContext);
