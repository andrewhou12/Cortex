import express from "express";
import sqlite3 from "sqlite3";

const app = express();
const port = 4000;

(async () => {
    const db = new sqlite3.Database("database.sqlite");

  app.get("/api/hello", async (_, res) => {
    const rows = await db.all("SELECT datetime('now')");
    res.json(rows);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();
