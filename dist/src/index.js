"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const main_routes_1 = __importDefault(require("./routes/main.routes"));
const not_found_1 = __importDefault(require("./utils/not.found"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://todo-app-drag-and-drop-gilt.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  optionsSuccessStatus: 204,
  exposedHeaders: ["set-cookie"],
  preflightContinue: false,
  maxAge: 86400,
};
app.use((0, cors_1.default)(corsOptions));
app.options("*", (0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(main_routes_1.default);
app.use("*", not_found_1.default);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`backend running on port ${PORT}`);
});
