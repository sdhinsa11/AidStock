
import { Router } from "express";
import { getAllItems, getItem, addItem, addItemForm, searchItem } from "../controllers/itemsController.js";

const itemRouter = Router();

// filter the categories here too in this router

itemRouter.get("/", getAllItems);


// order matters
itemRouter.get("/newItem", addItemForm);
itemRouter.post("/newItem", addItem);

itemRouter.get("/search", searchItem);

itemRouter.get("/:id", getItem);



// UNCOMMENT OUT 
// itemRouter.get("/search", getSearchedItem);

export default itemRouter;