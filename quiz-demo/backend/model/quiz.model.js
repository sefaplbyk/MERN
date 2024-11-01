import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
  questionText: { type: String, required: true },
  options: [{ text: String, isCorrect: Boolean }],
  category: String,
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
