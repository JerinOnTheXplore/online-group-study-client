import React, { useState } from "react";

const flashcards = [
  {
    question: "Which vitamin is important for vision?",
    answer: "Vitamin A",
  },
  {
    question: "What mineral helps with oxygen transport?",
    answer: "Iron",
  },
  {
    question: "Which nutrient provides the main energy source?",
    answer: "Carbohydrates",
  },
  {
    question: "What vitamin is produced by skin under sunlight?",
    answer: "Vitamin D",
  },
  {
    question: "Which food is rich in antioxidants?",
    answer: "Dark chocolate",
  },
];

const funFacts = [
  "🥑 Avocados contain more potassium than bananas!",
  "🍫 Dark chocolate can boost brain function.",
  "🥦 Broccoli has more Vitamin C than oranges.",
  "🍯 Honey never spoils and has antibacterial properties.",
  "🥕 Carrots were originally purple, not orange!",
  "🍇 Grapes help protect your heart.",
  "🌰 Nuts are great sources of healthy fats and protein.",
];

const MiniGamesFunFacts = () => {
  // Flashcards states
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Fun fact state
  const [factIndex, setFactIndex] = useState(0);

  const handleNextCard = () => {
    setShowAnswer(false);
    setCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handleShowAnswer = () => setShowAnswer(true);

  const handleNextFact = () => {
    setFactIndex((prev) => (prev + 1) % funFacts.length);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      {/* Flashcards Game */}
      <section className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-4">🎴 Nutrition Flashcards</h2>
        <div className="border-2 border-emerald-600 rounded-lg max-w-7xl mx-auto cursor-pointer select-none"
             onClick={showAnswer ? handleNextCard : handleShowAnswer}
             title={showAnswer ? "Click to go to next card" : "Click to see the answer"}>
          <p className="text-xl font-semibold text-emerald-900">
            {showAnswer ? flashcards[cardIndex].answer : flashcards[cardIndex].question}
          </p>
          <small className="block mt-2 text-emerald-600">
            {showAnswer ? "Answer" : "Question"}
          </small>
        </div>
        <p className="mt-3 text-gray-600 italic">Click the card to {showAnswer ? "go to next question" : "reveal the answer"}.</p>
      </section>

      {/* Did You Know Section */}
      <section className="text-center bg-emerald-50 rounded-lg p-6">
        <h2 className="text-3xl font-bold text-emerald-700 mb-4">💡 Did You Know?</h2>
        <p className="text-lg text-emerald-900 mb-4">{funFacts[factIndex]}</p>
        <button
          onClick={handleNextFact}
          className="bg-emerald-600 text-white px-5 py-2 rounded hover:bg-emerald-700 transition"
        >
          Show Next Fact
        </button>
      </section>
    </div>
  );
};

export default MiniGamesFunFacts;
