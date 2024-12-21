import express from "express";
import "dotenv/config";
import router from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use(router);

app.listen(PORT, () => {
  console.log(`backend running on port ${PORT}`);
});
