import React, { useState } from "react";
import { HiMiniChevronDown, HiMiniQuestionMarkCircle } from "react-icons/hi2";

const faqs = [
  {
    question: "What is Edumates?",
    answer:
      "Edumates is a collaborative platform where users can create, submit, and review assignments in a group-study environment.",
  },
  {
    question: "Is Edumates free to use?",
    answer:
      "Yes, Edumates is completely free for students and educators. Just register and start collaborating!",
  },
  {
    question: "Can I edit my assignment after submission?",
    answer:
      "You can edit your assignment anytime before the deadline directly from your dashboard.",
  },
  {
    question: "Does Edumates support peer grading?",
    answer:
      "Yes! Peer grading is one of Edumates’ core features — helping students learn by evaluating each other’s work.",
  },
];

const tips = [
  "Collaborate with peers for better learning.",
  "Use instant feedback to improve quickly.",
  "Participate in live quizzes to test your skills.",
  "Share useful resources with your group.",
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-600 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col md:flex-row gap-12 text-left max-w-6xl mx-auto">
          {/* Left side FAQ */}
          <div className="flex-1 max-w-xl">
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="relative border border-emerald-200 rounded p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full justify-between items-center focus:outline-none"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <div className="flex items-center gap-3 text-lg font-semibold text-emerald-700">
                      <HiMiniQuestionMarkCircle className="text-2xl text-emerald-500" />
                      {faq.question}
                    </div>
                    <HiMiniChevronDown
                      className={`text-2xl text-emerald-600 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    className={`mt-4 text-gray-700 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                    aria-hidden={openIndex !== i}
                  >
                    <p>{faq.answer}</p>
                  </div>

                  <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 animate-pulse opacity-60" />
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 max-w-xl bg-emerald-50 p-8 rounded shadow-lg">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Study Tips</h3>
            <ul className="list-decimal list-inside space-y-3 text-emerald-800">
              {tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
