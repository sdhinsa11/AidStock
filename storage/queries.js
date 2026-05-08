import { pool } from "./db.js"; // change to ESLint


async function getItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  // const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getCategory() {
  const { rows } = await pool.query("SELECT * FROM categories ORDER BY name");
  return rows;
}

async function getCategoryItems(category) {
  // needs to grab from the items cause returning items but joins the two tables for that
  const { rows } = await pool.query("SELECT * FROM items JOIN categories ON items.category_id = categories.id WHERE categories.name = ($1)", [category]);
  return rows;
}

async function getItemDb(itemID){

  const item = await pool.query("SELECT * FROM items WHERE id = ($1)", [itemID]);

  // console.log(item.rows[0]);
  return item.rows[0];

}

async function addItemDb(name, desc, quantity, unit, expiration_date, category_id) {
  const result = await pool.query(
    `
    INSERT INTO items 
      (name, description, quantity, unit, expiration_date, category_id)
    VALUES 
      ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `,
    [name, desc, quantity, unit, expiration_date, category_id]
  );

  return result.rows[0];
}


// async function insertUsername(username) {
//   await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// }

export {
  getItems,
  getCategory,
  getCategoryItems,
  getItemDb,
  addItemDb

};