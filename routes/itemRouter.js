
import { Router } from "express";
import { getAllItems, getItem } from "../controllers/itemsController.js";

const itemRouter = Router();

// filter the categories here too in this router

itemRouter.get("/", getAllItems);

itemRouter.get("/:id", getItem);


// UNCOMMENT OUT 
// itemRouter.get("/search", getSearchedItem);

export default itemRouter;