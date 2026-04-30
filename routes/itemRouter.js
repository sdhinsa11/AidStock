
import { Router } from "express";
import { getAllItems  } from "../controllers/itemsController.js";

const itemRouter = Router();

itemRouter.get("/", getAllItems);

// itemRouter.get("/:id", <controllers></controllers>);

export default itemRouter;