import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import thesisRouter from "./tesis/Tesis.router";


const app = express();

dotenv.config();

// configuraciones basicas
app.use(cors());
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(morgan("dev"));

// Rutas a utilizar
app.use("/thesis", thesisRouter);



export default app;