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
exports.default = updateTodoController;
const update_service_1 = __importDefault(require("../../services/todo/update.service"));
function updateTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const response = yield (0, update_service_1.default)(id, status);
            res
                .status(200)
                .json({ message: "Todo status successfully updated", data: response });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    message: error.message,
                });
            }
            else {
                res.status(400).json({ message: "unexpected error occurred" });
            }
        }
    });
}
