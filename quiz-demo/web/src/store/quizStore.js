import { configureStore } from '@reduxjs/toolkit'

export const quizStore = configureStore({
  reducer: {
    quizzes:[]
  },
})