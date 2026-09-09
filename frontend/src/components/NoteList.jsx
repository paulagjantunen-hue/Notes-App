export default function NoteList({ notes, onDelete }) {
    return (
        <div>
            {notes.map(n => (
                <div key={n.id} style={{ border: "1px solid #ccc", padding: 10, marginTop: 10 }}>
                    <h3>{n.title}</h3>
                    <p>{n.content}</p>
                    <button onClick={() => onDelete(n.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}