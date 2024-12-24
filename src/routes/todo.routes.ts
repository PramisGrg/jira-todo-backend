import { Router } from "express";
import { createTodoController } from "../controller/todo/create.controller";
import getTodoController from "../controller/todo/get.controller";

const todoRoutes = Router();

todoRoutes.get("/get", getTodoController);
todoRoutes.post("/create", createTodoController);
// todoRoutes.patch("/update", updateTodoController)

export default todoRoutes;
