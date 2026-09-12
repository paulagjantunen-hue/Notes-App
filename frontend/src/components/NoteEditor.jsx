import React, { useState } from "react";

export default function NoteEditor({ onAdd }) {
    const [text, setText] = useState("");
    
    return (
        <div style={{ marginTop: 20 }}>
            <textarea
                placeholder="Write a note..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ display: "block", width: "100%", height: 80 }}
            />

            <button
                onClick={() => {
                    if (text.trim() === "") return;
                    onAdd(text);
                    setText("");
                }}
                style={{ marginTop: 10 }}
            >
                Add Note
            </button>
        </div>
    );
}