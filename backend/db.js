import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function createDb() {
    const db = await open({
        filename: "./notes.db",
        driver: sqlite3.Database,
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL
        )
    `);

    return db;
}