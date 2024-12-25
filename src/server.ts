import express from "express";
import "dotenv/config";
import mainRouter from "./routes/main.routes";
import notFoundController from "./utils/not.found";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://drag-and-drop-todo-app.vercel.app/",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);
app.use("*", notFoundController);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`backend running on port ${PORT}`);
});
