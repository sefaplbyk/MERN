import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../features/quiz/slice";

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [wrongAnswer, setWrongAnswer] = useState([]);

  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quiz.quizzes);
  const quizStatus = useSelector((state) => state.quiz.status);
  const error = useSelector((state) => state.quiz.error);
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

  const handleAnswerSelect = (item) => {
    if (item.isCorrect) {
      setSelectedAnswer(item);
      // setWrongAnswer(null);
    } else {
      setWrongAnswer([...wrongAnswer, item]);
    }
  };

  const handleNextButton = () => {
    if (currentQuestionIndex + 1 == quizzes.data.length) {
      alert("Soru bitti");
      location.reload();
    }
    if (selectedAnswer.isCorrect) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setWrongAnswer([]);
    }
  };
  console.log(wrongAnswer);
  return (
    <div>
      <h1 className="w-full h-screen bg-blue-200  flex justify-center items-center">
        <div className="w-5/6 md:w-1/2 lg:w-5/12  bg-gray-600 rounded-md   h-auto px-8 py-6">
          <div className="border-b-2 text-white">
            <div>Soru {currentQuestionIndex + 1}</div>
          </div>
          <div className="my-8 text-white ">
            <p className="font-bold text-2xl my-4">
              {currentQuestion.questionText}
            </p>
            <ul className="flex flex-col gap-4">
              {currentQuestion.options.map((item) => (
                <button
                  disabled={selectedAnswer?.isCorrect}
                  key={item._id}
                  onClick={() => handleAnswerSelect(item)}
                >
                  <li
                    className={`p-2 border-2 rounded-3xl text-xl ${
                      wrongAnswer.some((wa) => wa == item)
                        ? "bg-red-700 border-red-700"
                        : selectedAnswer && selectedAnswer === item
                        ? "bg-green-600 border-green-600"
                        : ""
                    }`}
                  >
                    {item.text}
                  </li>
                </button>
              ))}
            </ul>
          </div>

          <div className="mt-2 w-full flex justify-end">
            <button
              disabled={!selectedAnswer?.isCorrect}
              onClick={handleNextButton}
              className="bg-green-600 text-white py-2 px-4 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default QuizComponent;
