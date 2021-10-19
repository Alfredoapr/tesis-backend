import { Router } from "express";
import { getAllThesis, createNewThesis } from "./Tesis.controller";

const thesisRouter = Router();

thesisRouter.get("/", getAllThesis);

thesisRouter.post("/", createNewThesis);

export default thesisRouter;