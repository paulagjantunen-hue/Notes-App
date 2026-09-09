import React, { useEffect, useState } from "react";
import { getNotes, addNote, deleteNote } from "./api.js";
import NoteList from "./components/NoteList.jsx";
import NoteEditor from "./components/NoteEditor.jsx";
import SearchBar from "./components/SearchBar.jsx";

export default function App() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getNotes().then(setNotes);
    }, []);

    const filtered = notes.filter(n =>
        n.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: 20, maxWidth: 700, margin: "auto" }}>
            <h1>Notes App</h1>
            <SearchBar value={search} onChange={setSearch} />
            <NoteEditor onSave={async (t, c) => {
                const newNote = await addNote(t, c);
                setNotes(currentNotes => [newNote, ...currentNotes]);
            }} />
            <NoteList notes={filtered} onDelete={async id => {
                await deleteNote(id);
                setNotes(currentNotes => currentNotes.filter(n => n.id !== id));
            }} />
        </div>
    );
}