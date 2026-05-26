import express from "express";

const commitsRouter = express.Router();

commitsRouter.get("/latest-commits");

export default commitsRouter;
