const API = "http://localhost:3000/api";

export async function getNotes() {
    const res = await fetch(`${API}/notes`);
    return res.json();
}

export async function addNote(text) {
    const res = await fetch(`${API}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });
    return res.json();
}

export async function deleteNote(id) {
    const res = await fetch(`${API}/notes/${id}`, {
        method: "DELETE",
    });
    return res.json();
}