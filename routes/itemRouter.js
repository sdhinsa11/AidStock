
import { Router } from "express";
import { getAllItems  } from "../controllers/itemsController.js";

const itemRouter = Router();

// filter the categories here too in this router

itemRouter.get("/", getAllItems);

// itemRouter.get("/:id", <controllers></controllers>);

export default itemRouter;