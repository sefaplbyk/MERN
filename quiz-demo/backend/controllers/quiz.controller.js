import { Question } from "../model/quiz.model.js";

export const getQuiz = async (req, res) => {
  try {
    // const questions = await Question.find({});
    const questions = await Question.aggregate([{ $sample: { size: 10 } }]);
    res.status(200).json({ success: true, data: questions });
  } catch (error) {
    console.log("Error in fetching questions: " + error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createQuestions = async (req, res) => {
  try {
    const questions = req.body;

    const savedQuestions = await Question.insertMany(questions);
    res.status(201).json(savedQuestions);
  } catch (error) {
    console.error("Soruları eklerken hata oluştu:", error);
    res
      .status(500)
      .json({ success: false, message: "Sorular eklenirken bir hata oluştu." });
  }
};
export const createQuestion = async (req, res) => {
  const question = req.body;
  const newQuestion = new Question(question);
  try {
    await newQuestion.save();
    res.status(201).json({ success: true, data: newQuestion });
  } catch (error) {
    console.log("Error in create question:: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
