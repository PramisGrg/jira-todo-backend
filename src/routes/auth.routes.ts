import { Router } from "express";
import { registerUserController } from "../controller/auth/register.controller";
import { loginUserController } from "../controller/auth/login.controller";

const authRoutes = Router();

authRoutes.post("/register", registerUserController);
authRoutes.post("/login", loginUserController);

export default authRoutes;
