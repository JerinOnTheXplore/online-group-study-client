import React, { useState, useEffect } from "react";
import { FaStickyNote } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

const NutritionNotes = () => {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [factIndex, setFactIndex] = useState(0);

  const facts = [
    "🥑 Avocados contain more potassium than bananas!",
    "🍫 Dark chocolate is rich in antioxidants and can improve brain function.",
    "🍎 An apple a day really can help keep the doctor away.",
    "🥦 Broccoli contains more vitamin C than an orange.",
    "🥕 Carrots were originally purple, not orange!",
    "🍇 Grapes can help protect your heart due to their polyphenols.",
    "🥬 Spinach is packed with iron and helps maintain healthy skin.",
    "🍯 Honey never spoils and has natural antibacterial properties.",
    "🌰 Nuts are great sources of healthy fats and protein.",
    "🍋 Lemon juice can help improve digestion and boost immunity."
  ];

  useEffect(() => {
    const saved = localStorage.getItem("personalNote");
    if (saved) {
      setSavedNote(saved);
      setNote(saved);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("personalNote", note);
    setSavedNote(note);
  };

  const handleNextFact = () => {
    setFactIndex((prev) => (prev + 1) % facts.length);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-8 rounded shadow-lg bg-white border border-emerald-100">
      {/* Title Section */}
      <div className="flex items-center gap-3 mb-6">
        <FaStickyNote className="text-emerald-600 text-3xl" />
        <h1 className="text-2xl font-bold text-emerald-700">
          Personal Nutrition Notes
        </h1>
      </div>

      {/* Notes Textarea */}
      <textarea
        className="w-full p-4 border border-emerald-200 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        rows="4"
        placeholder="Write your nutrition notes here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition"
      >
        Save Note
      </button>

      {/* Display Saved Note */}
      {savedNote && (
        <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
          <h2 className="font-semibold text-emerald-700 mb-2">
            Your Saved Note:
          </h2>
          <p className="text-gray-700 leading-relaxed">{savedNote}</p>
        </div>
      )}

      {/* Divider */}
      <hr className="my-8 border-emerald-100" />

      {/* Facts Section */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <GiFruitBowl className="text-emerald-600 text-2xl" />
          <h2 className="text-xl font-bold text-emerald-700">
            Interesting Nutrition Fact
          </h2>
        </div>
        <p
          key={factIndex}
          className="mt-2 text-lg text-emerald-800 transition-all duration-500 ease-in-out"
        >
          {facts[factIndex]}
        </p>
        <button
          onClick={handleNextFact}
          className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded font-medium transition"
        >
          Next Fact
        </button>
      </div>
    </div>
  );
};

export default NutritionNotes;
