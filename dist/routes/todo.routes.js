"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_controller_1 = require("../controller/todo/create.controller");
const get_controller_1 = __importDefault(require("../controller/todo/get.controller"));
const update_controller_1 = __importDefault(require("../controller/todo/update.controller"));
const todoRoutes = (0, express_1.Router)();
todoRoutes.get("/get", get_controller_1.default);
todoRoutes.post("/create", create_controller_1.createTodoController);
todoRoutes.patch("/update/:id", update_controller_1.default);
exports.default = todoRoutes;
