import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env?.PORT || 8080;

const app: Express = express();

// middleware declaration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));


// routes imports
import testRoutes from "./routes/test.route.js";

// routes declaration
app.use("/api/v1/test", testRoutes);

app.listen(PORT, () => {
    console.log(`[server]: Server is listening on http://localhost:${PORT}`);
});