import mongoose from "mongoose";

import Todo from "../models/todo.model.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    console.log("Error in fetching todos:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createTodos = async (req, res) => {
  const todo = req.body;

  if (!todo.description) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide todo description." });
  }

  const newTodo = new Todo(todo);

  try {
    await newTodo.save();
    res.status(201).json({ success: true, data: newTodo });
  } catch (error) {
    console.error("Error in Create todos: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteTodos = async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.status(201).json({ success: true, message: "Todo Silindi" });
  } catch (error) {
    console.error("Error in Remove todos: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export const updateTodos = async (req, res) => {
  const { id } = req.params;
  const todo = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Todo Id" });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, todo, { new: true });

    res.status(201).json({ success: true, data: updatedTodo });
  } catch (error) {
    console.error("Error in update todos: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
