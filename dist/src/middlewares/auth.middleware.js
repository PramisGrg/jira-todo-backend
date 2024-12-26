"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const token = req.header("Authorization");
        if (!token) {
            return res
                .status(401)
                .json({ message: "You're not logged in, please try again" });
        }
        const [tokenType, tokenValue] = token.split(" ");
        if (tokenType !== "Bearer") {
            return res
                .status(401)
                .json({ message: "Sorry, the login method is not valid here" });
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(tokenValue, (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : "default_jwt_token");
            req.user = decoded;
            next();
        }
        catch (error) {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
    });
}
