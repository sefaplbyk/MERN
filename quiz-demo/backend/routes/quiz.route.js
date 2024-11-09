import express from "express";
import {
  createQuestions,
  getQuiz,
  createQuestion,
} from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/", getQuiz);
router.post("/questions", createQuestions);
router.post("/", createQuestion);

export default router;
