import express from "express";

export function createRoutes(db) {
    const router = express.Router();

    router.get("/notes", async (req, res) => {
        const notes = await db.all ("SELECT * FROM notes ORDER BY id DESC");
        res.json(notes);
    });

    router.post("/notes", async (req, res) => {
        const { title, content } = req.body;
        const createdAt = new Date().toISOString();

        const result = await db.run(
            "INSERT INFO notes (title, content, createdAt) VALUES (?, ?, ?)",
            [title, content, createdAt]
        );

        res.json({ id: result.lastID, title, content, createdAt });
    });

    router.delete("/notes/:id", async (req, res) => {
        await db.run("DELETE FROM notes WHERE id = ?", req.params.id);
        res.json({ success: true });
    });

    return router;
}