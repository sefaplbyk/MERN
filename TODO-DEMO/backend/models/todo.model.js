import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true, 
    },
    completed: {
      type: Boolean,
      default: false, 
    },
  },
  {
    timestamps: true, // Oluşturulma ve güncellenme zamanlarını otomatik ekler
  }
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo