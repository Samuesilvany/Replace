import express from "express";
import { Pool } from "pg";

const app = express();

app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Replace",
  password: "senai",
  port: 5432,
});

app.get("/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT 1 AS ok");

    res.status(200).json({
      status: "ok",
      db: result.rows?.[0]?.ok ?? 1
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});


app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/reservations", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM reservations");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Back-End listening on port ${PORT}`);
});

export { pool };
