import express from "express";
import commitsRouter from "./routes/commitRouter.js";

const server = express();

server.use(express.json());

// Routes
server.use("/api,", commitsRouter);

server.listen(3000, () => {
	console.log("server running on port 3000");
});
