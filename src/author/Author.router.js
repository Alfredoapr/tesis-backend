import { Router } from "express";
import { getAuthorById } from "./Author.controller";

const authorRouter = Router();

authorRouter.get("/:id", getAuthorById);

export default authorRouter;