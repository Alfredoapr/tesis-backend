import { Router } from "express";
import { getAllThesis, createNewThesis, searchByQuery } from "./Tesis.controller";

const thesisRouter = Router();

thesisRouter.get("/", getAllThesis);

thesisRouter.post("/", createNewThesis);

thesisRouter.get("/search", searchByQuery);

export default thesisRouter;