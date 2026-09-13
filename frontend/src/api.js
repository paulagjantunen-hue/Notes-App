const API = "/api";

async function request(url, options) {
    const res = await fetch(url, options);

    if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
    }

    return res.json();
}

export async function getNotes() {
    return request(`${API}/notes`);
}

export async function addNote(text) {
    return request(`${API}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });
}

export async function deleteNote(id) {
    return request(`${API}/notes/${id}`, {
        method: "DELETE",
    });
}