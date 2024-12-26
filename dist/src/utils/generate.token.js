"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateWebToken = (payload, duration) => {
    try {
        const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET || "default_secret_key", {
            expiresIn: duration || "1h",
        });
        return token;
    }
    catch (_a) {
        return false;
    }
};
exports.default = generateWebToken;
