import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../features/quiz/slice";

function QuizOptions({ currentQuestion }) {
  const dispatch = useDispatch();
  const wrongAnswer = useSelector((state) => state.quiz.wrongAnswer);
  const selectedAnswer = useSelector((state) => state.quiz.selectedAnswer);

  const handleAnswerSelect = (item) => {
    dispatch(selectAnswer({ answer: item }));
  };

  return (
    <ul className="flex flex-col gap-4">
      {currentQuestion?.options?.map((item) => (
        <button
          disabled={selectedAnswer?.isCorrect}
          key={item._id}
          onClick={() => handleAnswerSelect(item)}
        >
          <li
            className={`p-2 border-2 rounded-3xl text-xl ${
              wrongAnswer.some((wa) => wa == item)
                ? "bg-red-400 border-red-500"
                : selectedAnswer && selectedAnswer === item
                ? "bg-green-400 border-green-500"
                : ""
            }`}
          >
            {item.text}
          </li>
        </button>
      ))}
    </ul>
  );
}

export default QuizOptions;
