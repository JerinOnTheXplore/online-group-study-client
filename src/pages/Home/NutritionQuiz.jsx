import React, { useState } from "react";
import { useNavigate } from "react-router";  

const quizData = [
  {
    id: 1,
    question: "Which vitamin is primarily responsible for blood clotting?",
    options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    correctAnswer: "Vitamin K",
  },
  {
    id: 2,
    question: "What mineral is important for healthy bones and teeth?",
    options: ["Iron", "Calcium", "Potassium", "Zinc"],
    correctAnswer: "Calcium",
  },
  {
    id: 3,
    question: "Which nutrient is the main source of energy for the body?",
    options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
    correctAnswer: "Carbohydrates",
  },
  {
    id: 4,
    question: "What is the deficiency disease caused by lack of vitamin C?",
    options: ["Scurvy", "Rickets", "Anemia", "Beriberi"],
    correctAnswer: "Scurvy",
  },
  {
    id: 5,
    question: "Which vitamin helps in calcium absorption?",
    options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin B12"],
    correctAnswer: "Vitamin D",
  },
  {
    id: 6,
    question: "Which nutrient is essential for muscle repair and growth?",
    options: ["Carbohydrates", "Proteins", "Fats", "Fiber"],
    correctAnswer: "Proteins",
  },
  {
    id: 7,
    question: "Which mineral helps in oxygen transport in the blood?",
    options: ["Magnesium", "Iron", "Sodium", "Calcium"],
    correctAnswer: "Iron",
  },
  {
    id: 8,
    question: "Which vitamin is produced by the skin when exposed to sunlight?",
    options: ["Vitamin B6", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: "Vitamin D",
  },
  {
    id: 9,
    question: "What type of fat is considered 'healthy fat'?",
    options: ["Trans fat", "Saturated fat", "Unsaturated fat", "Hydrogenated fat"],
    correctAnswer: "Unsaturated fat",
  },
  {
    id: 10,
    question: "Which vitamin is important for vision and immune function?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin E"],
    correctAnswer: "Vitamin A",
  },
];


const NutritionQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate(); // useNavigate হুক

  const currentQuestion = quizData[currentIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setSelectedOption(null);
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg my-10">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)} 
        className="mb-6 text-emerald-600 hover:underline font-semibold"
      >
        ← Go Back
      </button>

      {!showResult ? (
        <>
          <h2 className="text-xl font-semibold mb-6 text-emerald-700">
            Question {currentIndex + 1} of {quizData.length}
          </h2>
          <p className="text-lg mb-4">{currentQuestion.question}</p>

          <div className="grid gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`border rounded-md py-2 px-4 text-left transition
                  ${
                    selectedOption === option
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-gray-700 hover:bg-emerald-100"
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            disabled={!selectedOption}
            onClick={handleNext}
            className={`mt-6 w-full py-3 rounded-md text-white font-semibold transition
              ${
                selectedOption
                  ? "bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              }
            `}
          >
            {currentIndex + 1 === quizData.length ? "Finish Quiz" : "Next Question"}
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-emerald-700">Quiz Completed!</h2>
          <p className="mb-6 text-lg">
            Your score: {score} / {quizData.length}
          </p>
          <button
            onClick={handleRestart}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-md"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default NutritionQuiz;
