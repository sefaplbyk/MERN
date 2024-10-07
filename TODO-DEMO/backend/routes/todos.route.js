import express from "express";

import { createTodos, getTodos, deleteTodos, updateTodos } from "../controllers/todos.controller.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/",createTodos)
router.delete("/:id",deleteTodos)
router.patch('/:id',updateTodos)




export default router
