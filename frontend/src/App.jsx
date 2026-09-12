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

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "40px", color: "red" }}>DEBUG: APP RENDEROI</h1>

      <p style={{color: "blue", fontSize: "20px"}}>Notes count: {notes.length}</p>

      <SearchBar search={search} setSearch={setSearch} />

      <NoteEditor
        onAdd={(text) => {
          addNote(text).then(setNotes);
        }}
      />

      <NoteList
        notes={filteredNotes}
        onDelete={(id) => {
          deleteNote(id).then(setNotes);
        }}
      />
    </div>
  );
}