const API = "http://localhost:3000/api";

export async function getNotes() {
    return fetch(`${API}/notes`).then(r => r.json());
}

export async function addNote(title, content) {
    return fetch(`${API}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
    }).then(r => r.json());
}

export async function deleteNote(id) {
    return fetch(`${API}/notes/${id}`, {method: "DELETE" });
}