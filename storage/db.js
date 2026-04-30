import { Pool } from "pg";
import "dotenv/config";
// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

console.log("DB:", process.env.DB);
console.log("USER:", process.env.ROLE_NAME);
console.log("PORT:", process.env.DB_PORT);


export const pool = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.ROLE_NAME,
  database: process.env.DB,
  password: process.env.ROLE_PW,
  port: process.env.DB_PORT  // The default port
});

