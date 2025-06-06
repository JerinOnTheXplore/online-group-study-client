import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
const faqs = [
  {
    question: "What is Edumates?",
    answer:
      "Edumates is a collaborative assignment platform where users can create, submit, and evaluate assignments as a group.",
  },
  {
    question: "Can I work with my group members?",
    answer:
      "Yes! Edumates supports group-based collaboration so you can brainstorm, submit, and grade together.",
  },
  {
    question: "Is it beginner friendly?",
    answer:
      "Absolutely. The interface is clean, intuitive, and designed for both new and experienced users.",
  },
  {
    question: "Can I edit or delete my submissions?",
    answer:
      "Yes, as long as it's before the deadline, you can manage your submissions easily from your dashboard.",
  },
];


const Faqs = () => {
 const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
        <div>
         <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-purple-200 rounded-xl bg-white shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-purple-600" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 text-sm text-gray-600 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>    
        </div>
    );
};

export default Faqs;