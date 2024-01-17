import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process?.env?.PORT || 8080;

const app: Express = express();

// routes imports
import testRoutes from "./routes/test.route.js";

app.use("/api/v1/test", testRoutes);

app.listen(PORT, () => {
    console.log(`[server]: Server is listening on http://localhost:${PORT}`);
});