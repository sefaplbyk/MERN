import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../features/quiz/slice";
import QuizOptions from "./QuizOptions";
import NextButton from "./NextButton";

const Quiz = () => {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quiz.quizzes);
  const quizStatus = useSelector((state) => state.quiz.status);
  const error = useSelector((state) => state.quiz.error);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  useEffect(() => {
    if (quizStatus === "idle") {
      dispatch(fetchQuizzes());
    }
  }, [quizStatus, dispatch]);

  if (quizStatus === "loading" || !quizzes.data) {
    return <div>Loading...</div>;
  }

  if (quizStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  const currentQuestion = quizzes.data[currentQuestionIndex];

  return (
    <div>
      <div className="w-full h-screen bg-blue-200  flex justify-center items-center">
        <div className="w-5/6 md:w-1/2 lg:w-5/12  bg-gray-400 rounded-md shadow-2xl shadow-amber-950   h-auto px-8 py-6">
          <div className="border-b-2 text-white">
            <div>Soru {currentQuestionIndex + 1}</div>
          </div>
          <div className="my-8 text-white ">
            <p className="font-bold text-2xl my-4">
              {currentQuestion.questionText}
            </p>
            <QuizOptions currentQuestion={currentQuestion} />
          </div>

          <NextButton
            currentQuestionIndex={currentQuestionIndex}
            quizzes={quizzes}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
