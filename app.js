// Starting point of the application 

import express from "express"; // import express
import indexRouter from "./routes/indexRouter.js";
import itemRouter from "./routes/itemRouter.js"
import path from "path";
import "dotenv/config";
import { fileURLToPath } from "url";

const app = express(); // initialize app - this is our server

app.use(express.urlencoded({ extended: true })); // this also needs to go at the top because this is how we parse everything


// views

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", indexRouter);
app.use("/items", itemRouter);
// app.use("/new", newItemRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
		if (error) {
			throw error;
		}
		console.log(`My first Express app - listening on port ${PORT}!`);

});