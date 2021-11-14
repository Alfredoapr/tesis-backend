import { Router } from "express";
import { getAllUsers, createNewUser, login } from "./User.controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.post("/register", createNewUser);

userRouter.post("/login", login);

export default userRouter;