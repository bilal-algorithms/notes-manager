import * as express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notes.js";
import { logger } from "./middlewares/middlewares.js";
import errorHandler from "./middlewares/errorHandler.js";
import connectDB from "./config/db.js";
dotenv.config({ path: ".env" });
const app = express.default();
const port = 8000;
connectDB();
app.use(express.json());
app.use(logger);
app.use("/notes", notesRoutes);
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: "Not found" });
});
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
