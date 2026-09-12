import React from "react";

export default function NoteList({ notes, onDelete }) {
    return (
        <div>
            {notes.map((n) => (
                <div
                    key={n.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: 10,
                        marginTop: 10,
                    }}
                >
                    <p>{n.text}</p>
                    <button onClick={() => onDelete(n.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}