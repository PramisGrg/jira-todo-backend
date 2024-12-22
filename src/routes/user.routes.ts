import { Router } from "express";
import { createUser } from "../controller/user.controller";

const userRouter = Router();

userRouter.post("/", createUser);

export default userRouter;
