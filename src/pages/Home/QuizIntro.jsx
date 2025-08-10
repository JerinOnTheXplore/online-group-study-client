import React from "react";
import { useNavigate } from "react-router";

const QuizIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto rounded-lg p-10 my-16 text-center">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-emerald-700 tracking-wide">
        Test Your Nutrition IQ! 🥦🍎
      </h1>
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        Are you ready to challenge your knowledge on vitamins, minerals, and healthy eating? 
        Our interactive nutrition quiz will help you learn important facts, improve your health literacy, 
        and have fun along the way!
      </p>

      <ul className="text-left max-w-md mx-auto mb-8 space-y-4 text-gray-600 font-medium">
        <li>✅ 10 carefully crafted questions on essential nutrients</li>
        <li>✅ Instant feedback with explanations for each answer</li>
        <li>✅ Track your score and see how you improve</li>
        <li>✅ Responsive design that works beautifully on all devices</li>
      </ul>

      <button
        onClick={() =>{
            navigate("/quiz");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold px-8 py-4 rounded shadow-lg hover:from-emerald-600 hover:to-green-700 transition-transform transform hover:scale-105 focus:outline-none"
        aria-label="Start Nutrition Quiz"
      >
        Take the Quiz Now!
      </button>
    </div>
  );
};

export default QuizIntro;
