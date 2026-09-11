import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const databasePath = resolve(dirname(fileURLToPath(import.meta.url)), "notes.db");

export async function createDb() {
    const db = await open({
        filename: databasePath,
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            content TEXT,
            createdAt TEXT
        )
    `);

    return db;
}