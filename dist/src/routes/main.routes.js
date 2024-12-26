"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const todo_routes_1 = __importDefault(require("./todo.routes"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const mainRouter = (0, express_1.Router)();
mainRouter.use("/auth", auth_routes_1.default);
mainRouter.use("/todo", auth_middleware_1.authMiddleware, todo_routes_1.default);
exports.default = mainRouter;
