import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
  questionText: { type: String, required: true },
  options: [{ text: String, isCorrect: Boolean }],
  category: String,
});

export const Question = mongoose.model("Question", questionSchema);

