import { Router } from "express";
import userRouter from "./user.routes";
import authRoutes from "./auth.routes";

const mainRouter = Router();

mainRouter.use("/auth", authRoutes);
mainRouter.use("/user", userRouter);

export default mainRouter;
