import React from "react";

export default function SearchBar({ search, setSearch }) {
    return (
        <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
                padding: "8px",
                width: "100%",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
            }}
        />
    );
}