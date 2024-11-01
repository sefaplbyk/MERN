import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/slice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
