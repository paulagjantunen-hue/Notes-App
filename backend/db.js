import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const databasePath = join(dirname(fileURLToPath(import.meta.url)), "notes.db");

export async function createDb() {
    const db = await open({
        filename: databasePath,
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