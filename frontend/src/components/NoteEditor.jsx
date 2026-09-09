import { useState } from "react";

export default function NoteEditor({ onSave }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div style={{ marginTop: 20 }}>
            <input
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
                style={{ display: "block", width: "100%", height: 80, marginTop: 10 }}
            />
            <button onClick={() => {
                onSave(title, content);
                setTitle("");
                setContent("");
            }}>
                Add Note
            </button>
        </div>
    );
}