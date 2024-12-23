import express from "express";
import "dotenv/config";
import mainRouter from "./routes/main.routes";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`backend running on port ${PORT}`);
});
