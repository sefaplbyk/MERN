import { create } from "zustand";
import { fetchQuizzes } from "../services/quizServices.js";

const useQuizStore = create((set) => ({
  quizzes: [],
  selectedAnswer: null,
  wrongAnswer: [],
  currentQuestionIndex: 0,
  status: "idle",
  error: null,
  fetchQuizzes_: async () => {
    try {
      const { data, success } = await fetchQuizzes();
      if (success) {
        set({ quizzes: data, status: "success" });
      } else {
        set({ status: "error", error: "Failed to fetch quizzes" });
      }
    } catch (error) {
      set({ status: "error", error: error.message });
    }
  },
  selectAnswer: (answer) => {
    if (answer?.isCorrect) {
      set({ selectedAnswer: answer });
    } else if (answer) {
      set((state) => ({
        wrongAnswer: [...state.wrongAnswer, answer],
      }));
    }
  },
  goNextQuestion: () =>
    set((state) => {
      const nextIndex = state.currentQuestionIndex + 1;
      return {
        currentQuestionIndex: nextIndex < state.quizzes.length ? nextIndex : 0,
        selectedAnswer: null,
        wrongAnswer: [],
      };
    }),
}));

export default useQuizStore;
