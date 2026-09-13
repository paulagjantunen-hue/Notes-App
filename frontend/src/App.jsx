import React, { useEffect, useState } from "react";
import { getNotes, addNote, deleteNote } from "./api.js";
import NoteList from "./components/NoteList.jsx";
import NoteEditor from "./components/NoteEditor.jsx";
import SearchBar from "./components/SearchBar.jsx";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getNotes()
      .then(setNotes)
      .catch(() => setError("Could not connect to the notes server."));
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Notes</h1>

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <SearchBar search={search} setSearch={setSearch} />

      <NoteEditor
        onAdd={(text) =>
          addNote(text)
            .then(setNotes)
            .catch((error) => {
              setError("Could not save the note.");
              throw error;
            })
        }
      />

      <NoteList
        notes={filteredNotes}
        onDelete={(id) => {
          deleteNote(id)
            .then(setNotes)
            .catch(() => setError("Could not delete the note."));
        }}
      />
    </div>
  );
}