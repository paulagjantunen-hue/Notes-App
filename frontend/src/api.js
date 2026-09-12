const API_URL = window.location.origin.replace("5173", "3001");

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