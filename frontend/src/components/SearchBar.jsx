export default function SearchBar({ value, onChange }) {
    return (
        <input
            placeholder="Search notes..."
            value={value}
            onChange={e => onChange(e.target.value)}
            style={{ width: "100%", marginTop: 20 }}
        />
    );
}