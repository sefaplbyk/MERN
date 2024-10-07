import express from "express";
import { connectDB } from "./db/connection.js";
import Todo from "./models/todo.model.js";
import dotenv from "dotenv";
import todosRoutes from "./routes/todos.route.js"

import cors from "cors"

dotenv.config();

const app = express();
app.use(cors()); 

app.use(express.json());

app.use("/api/todos", todosRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server calistirildi PORT : 5000 ");
});
