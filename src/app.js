import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();

dotenv.config();

// configuraciones basicas
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(morgan("dev"));


export default app;