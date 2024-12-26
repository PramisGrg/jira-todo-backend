"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_controller_1 = require("../controller/auth/register.controller");
const login_controller_1 = require("../controller/auth/login.controller");
const authRoutes = (0, express_1.Router)();
authRoutes.post("/register", register_controller_1.registerUserController);
authRoutes.post("/login", login_controller_1.loginUserController);
exports.default = authRoutes;
