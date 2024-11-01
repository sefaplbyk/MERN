import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuizzes = createAsyncThunk("quiz/fetchQuizzes", async () => {
  const response = await fetch("http://localhost:5000/api/quiz");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
});

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizzes: [],
    status: "idle",
    error: null,
  },
  reducers: {},
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
