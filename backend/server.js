import express from "express";
import cors from "cors";
import { createDb } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Luodaan tietokanta kerran
let db;

async function init() {
    db = await createDb();

    // GET /api/notes
    app.get("/api/notes", async (req, res) => {
        const notes = await db.all("SELECT * FROM notes");
        res.json(notes);
    });

    // POST /api/notes
    app.post("/api/notes", async (req, res) => {
        const { text } = req.body;
        await db.run("INSERT INTO notes (text) VALUES (?)", text);
        const notes = await db.all("SELECT * FROM notes");
        res.json(notes);
    });

    // DELETE /api/notes/:id
    app.delete("/api/notes/:id", async (req, res) => {
        const { id } = req.params;
        await db.run("DELETE FROM notes WHERE id = ?", id);
        const notes = await db.all("SELECT * FROM notes");
        res.json(notes);
    });

    app.listen(3000, () => {
        console.log("Backend running on port 3000");
    });
}

init();