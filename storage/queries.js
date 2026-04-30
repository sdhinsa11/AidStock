import { pool } from "./db.js"; // change to ESLint


// Sample queries 
async function getItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  // const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getCategory() {
  const { rows } = await pool.query("SELECT * FROM items");
  // const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getSpecificItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  // const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}


// async function insertUsername(username) {
//   await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// }

export {
  getItems,
  getCategory,
  getSpecificItems

};