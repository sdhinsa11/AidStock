// routes/indexRouter.js
import { Router } from "express";
import { displayHome } from "../controllers/indexController";

const indexRouter = Router();

indexRouter.get("/", displayHome);

export default indexRouter;