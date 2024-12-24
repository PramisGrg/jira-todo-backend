import express from "express";
import "dotenv/config";
import mainRouter from "./routes/main.routes";
import notFoundController from "./utils/not.found";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);
app.use("*", notFoundController);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`backend running on port ${PORT}`);
});
