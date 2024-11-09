import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuizzes = createAsyncThunk("quiz/fetchQuizzes", async () => {
  try {
    const response = await fetch("http://localhost:5000/api/quiz");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
});

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizzes: [],
    selectedAnswer: null,
    wrongAnswer: [],
    currentQuestionIndex: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    selectAnswer: (state, action) => {
      const { answer } = action.payload;
      if (answer.isCorrect) {
        state.selectedAnswer = answer;
      } else {
        state.wrongAnswer.push(answer);
      }
    },
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 < state.quizzes.data.length) {
        state.selectedAnswer = null;
        state.wrongAnswer = [];
        state.currentQuestionIndex += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quizzes = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quizSlice.reducer;
export const { selectAnswer, goToNextQuestion } = quizSlice.actions;
