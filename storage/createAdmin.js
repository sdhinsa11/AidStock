import bcrypt from "bcrypt";
import { pool } from "./db.js"; // change to ESLint


async function createAdmin() {

  const hashedPassword = await bcrypt.hash(
    "admin123",
    10
  );

  await pool.query(
    `
    INSERT INTO users (
      username,
      password_hash,
      role
    )
    VALUES ($1, $2, $3)
    `,
    [
      "admin",
      hashedPassword,
      "admin"
    ]
  );

  console.log("Admin user created!");

  process.exit();
}

createAdmin();