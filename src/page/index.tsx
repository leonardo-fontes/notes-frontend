import React from "react";
import Note from "../components/Note";
import { useNotes } from "../context/notes";

const Home: React.FC = () => {
    const { notes, loading } = useNotes();
    return (
        <div className="w-[60%] mx-auto flex flex-col gap-4 mt-8">
            {!loading
                ? notes?.map((note) => <Note key={note._id} {...note} />)
                : "Pesquisando notas"}
        </div>
    );
};

export default Home;
