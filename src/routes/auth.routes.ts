import { Router } from "express";
import { registerUserController } from "../controller/auth/register.controller";

const authRoutes = Router();

authRoutes.post("/register", registerUserController);
authRoutes.post("/login");

export default authRoutes;
