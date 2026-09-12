const API = "https://literate-space-dollop-v67x65r4gqprfp99-5173.app.github.dev/";

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