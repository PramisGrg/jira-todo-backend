import { Router } from "express";
import { createTodoController } from "../controller/todo/create.controller";
import getTodoController from "../controller/todo/get.controller";
import updateTodoController from "../controller/todo/update.controller";

const todoRoutes = Router();

todoRoutes.get("/get", getTodoController);
todoRoutes.post("/create", createTodoController);
todoRoutes.patch("/update/:id", updateTodoController);

export default todoRoutes;
