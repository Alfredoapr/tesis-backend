import { Router } from "express";
import { getSynodalById } from "./Synodal.controller";

const synodalRouter = Router();

synodalRouter.get("/:id", getSynodalById);

export default synodalRouter;