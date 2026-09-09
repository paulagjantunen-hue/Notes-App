import express from "express";
import cors from "cors";
import { createDb } from "./db.js";
import { createRoutes } from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());

const db = await createDb();
app.use("/api", createRoutes(db));

app.listen(3000, () => console.log("Backend running on port 3000"));