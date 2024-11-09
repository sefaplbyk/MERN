import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { goToNextQuestion } from "../features/quiz/slice";

function NextButton({ currentQuestionIndex, quizzes }) {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector((state) => state.quiz.selectedAnswer);

  const handleNextButton = () => {
    if (currentQuestionIndex + 1 === quizzes.length) {
      alert("Soru bitti");
      location.reload();
    } else if (selectedAnswer && selectedAnswer.isCorrect) {
      dispatch(goToNextQuestion());
    }
  };

  return (
    <div className="mt-2 w-full flex justify-end">
      <button
        disabled={!selectedAnswer?.isCorrect}
        onClick={handleNextButton}
        className="bg-green-600 text-white py-2 px-4 rounded-md"
      >
        Next
      </button>
    </div>
  );
}

export default NextButton;
