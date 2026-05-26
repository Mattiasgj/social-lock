import express from "express";
import { fetchCommitsController } from "../controllers/commitController.js";
const commitsRouter = express.Router();

commitsRouter.get("/commits", fetchCommitsController);

export default commitsRouter;
