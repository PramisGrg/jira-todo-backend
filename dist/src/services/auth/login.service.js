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
exports.userLoginService = userLoginService;
const db_config_1 = __importDefault(require("../../../config/db.config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const generate_token_1 = __importDefault(require("../../utils/generate.token"));
function userLoginService(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield db_config_1.default.user.findFirst({
            where: {
                email: data.email,
            },
        });
        if (!existingUser) {
            throw new Error("No user with such details was found");
        }
        const isPasswordValid = yield bcrypt_1.default.compare(data.password, existingUser.password);
        console.log(isPasswordValid);
        if (!isPasswordValid) {
            throw new Error("Wrong Password, please check correctly and enter again");
        }
        const responseData = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
        };
        const token = (0, generate_token_1.default)(responseData, "15d");
        return { responseData, token };
    });
}
