import { api } from "../api";


export const createNote = async (title: string, content: string) => {

    try {
    const response = await api.post("/notes", {
        title,
        content,
    });

    const note = response.data.note;
    
    return note;

    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
};