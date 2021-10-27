import { Router } from "express";
import { getAllStudent, createNewStudent, searchByQuery } from "./Student.controller";

const studentRouter = Router();

studentRouter.get("/", getAllStudent);

studentRouter.post("/", createNewStudent);

studentRouter.get("/search", searchByQuery);

export default studentRouter;