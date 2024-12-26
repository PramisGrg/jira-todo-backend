"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getTodoService;
const db_config_1 = __importDefault(require("../../config/db.config"));
function getTodoService(userId) {
    const getTodo = db_config_1.default.todo.findMany({
        where: {
            userId,
        },
    });
    return getTodo;
}
