import { Router } from "express";
import authRoutes from "./auth.routes";
import todoRoutes from "./todo.routes";
import { authMiddleware } from "../middlewares/auth.middleware";

const mainRouter = Router();

mainRouter.use("/auth", authRoutes);
mainRouter.use("/todo", authMiddleware, todoRoutes);

export default mainRouter;
