import pg from "pg";
const { Client } = pg;

const credentials = {
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD || "senai",
  port: Number(process.env.DB_PORT || 5432),
};

async function setup() {
  // 1. Connect to default 'postgres' database
  const systemClient = new Client({
    ...credentials,
    database: "postgres",
  });

  try {
    await systemClient.connect();
    console.log("Connected to default 'postgres' database.");
    
    // Check if Replace database exists
    const res = await systemClient.query(
      "SELECT 1 FROM pg_database WHERE datname = 'Replace'"
    );
    
    if (res.rowCount === 0) {
      console.log("Database 'Replace' does not exist. Creating...");
      await systemClient.query('CREATE DATABASE "Replace"');
      console.log("Database 'Replace' created successfully.");
    } else {
      console.log("Database 'Replace' already exists.");
    }
  } catch (err) {
    console.error("Error checking/creating database:", err.message);
    process.exit(1);
  } finally {
    await systemClient.end();
  }

  // 2. Connect to the 'Replace' database and create tables
  const dbClient = new Client({
    ...credentials,
    database: "Replace",
  });

  try {
    await dbClient.connect();
    console.log("Connected to 'Replace' database. Creating tables...");

    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Table 'users' verified/created.");

    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT,
        original_price DECIMAL(10,2) NOT NULL,
        discount_percentage INTEGER DEFAULT 0,
        final_price DECIMAL(10,2) NOT NULL,
        quantity INTEGER DEFAULT 0,
        expiration_date DATE NOT NULL,
        sale_day VARCHAR(30),
        image_url TEXT,
        status VARCHAR(20) DEFAULT 'active',
        market_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Table 'products' verified/created.");

    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS reservations (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
        status VARCHAR(20) DEFAULT 'pending',
        reserved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Table 'reservations' verified/created.");
    
    console.log("All tables set up successfully!");
  } catch (err) {
    console.error("Error creating tables:", err.message);
    process.exit(1);
  } finally {
    await dbClient.end();
  }
}

setup();
