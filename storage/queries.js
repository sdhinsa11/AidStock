import { pool } from "./db.js"; // change to ESLint


async function getItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  // const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getCategory() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getItemDb(itemID){

  const item = await pool.query("SELECT * FROM items WHERE id = ($1)", [itemID]);

  // console.log(item.rows[0]);
  return item.rows[0];

}


// async function insertUsername(username) {
//   await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// }

export {
  getItems,
  getCategory,
  getItemDb

};