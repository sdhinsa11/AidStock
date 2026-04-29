// routes/indexRouter.js
import { Router } from "express";
import { displayHome } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", displayHome);

export default indexRouter;