import React, { useState } from 'react';
import { HiMiniChevronDown, HiMiniQuestionMarkCircle } from 'react-icons/hi2';
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



const Faqs = () => {
 const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
    return (
        <div>
         <section className="py-20 bg-gradient-to-br from-purple-200 via-pink-300 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group relative bg-purple-200 backdrop-blur-md border border-purple-200 hover:border-purple-400 shadow-xl rounded-2xl p-5 transition-all duration-300 hover:shadow-2xl"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full justify-between items-center"
              >
                <div className="flex items-center gap-3 text-left text-lg font-medium text-gray-800">
                  <HiMiniQuestionMarkCircle className="text-2xl text-purple-500" />
                  {faq.question}
                </div>
                <HiMiniChevronDown
                  className={`text-xl text-purple-700 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`mt-3 text-sm text-gray-600 overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pt-2">{faq.answer}</p>
              </div>

              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full animate-ping opacity-50 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>    
        </div>
    );
};

export default Faqs;