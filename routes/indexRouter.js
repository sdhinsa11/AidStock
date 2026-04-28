// routes/indexRouter.js
import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Main Page"));

export default indexRouter;