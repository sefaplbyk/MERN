import express from "express";
import cors from "cors";
import { dbConnection } from "./db/conn.js";
import quizRoutes from "./routes/quiz.route.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/quiz", quizRoutes);

app.listen(5000, () => {
  dbConnection();
  console.log("Server 5000 portunda çalışıyor");
});
