import { Pool } from "pg";

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.ROLE_NAME,
  database: process.env.DB,
  password: process.env.ROLE_PW,
  port: process.env.DB_PORT  // The default port
});