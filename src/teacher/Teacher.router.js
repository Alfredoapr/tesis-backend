import { Router } from "express";
import { getAllTeacher, createNewTeacher, searchByQuery } from "./Teacher.controller";

const teacherRouter = Router();

teacherRouter.get("/", getAllTeacher);

teacherRouter.post("/", createNewTeacher);

teacherRouter.get("/search", searchByQuery);

export default teacherRouter;