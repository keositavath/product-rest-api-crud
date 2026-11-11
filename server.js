import express from "express";
import morgan from "morgan";

import { existsSync } from "node:fs";
import connectDB from "./config/db.js";
import productRouter from "./routes/product.route.js";

if (existsSync(".env")) {
    process.loadEnvFile(".env");
}

const loggerMiddleware = (req, res, next) => {
    console.log(` Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
}

const app = express();

app.use(morgan("dev"));
app.use(express.json());


app.use(loggerMiddleware);

app.use("/api/products", productRouter);




const PORT = process.env.PORT || 8001;

await connectDB();

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} is running!`);
});