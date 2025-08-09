import React from "react";
import { FaCheckCircle, FaBookOpen, FaUsers, FaQuestionCircle, FaShareAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBookOpen className="text-emerald-500 text-5xl mb-4" />,
      title: "Smart Assignments",
      desc: "Design, submit, and manage assignments effortlessly with deadline & marks tracking.",
    },
    {
      icon: <FaUsers className="text-emerald-600 text-5xl mb-4" />,
      title: "Group Collaboration",
      desc: "Team up with peers, exchange ideas, and grade each other to grow together.",
    },
    {
      icon: <FaCheckCircle className="text-emerald-700 text-5xl mb-4" />,
      title: "Instant Evaluation",
      desc: "Real-time feedback & grading system to boost learning speed and accuracy.",
    },
    {
      icon: <FaQuestionCircle className="text-emerald-500 text-5xl mb-4" />,
      title: "Live Quiz Sessions",
      desc: "Engage in interactive quizzes to test knowledge and prepare effectively.",
    },
    {
      icon: <FaShareAlt className="text-emerald-600 text-5xl mb-4" />,
      title: "Resource Sharing",
      desc: "Easily share notes, videos, and materials with your study group.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-6xl   text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 mb-6">
          Discover What Makes Edumates Unique
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Elevate your online group study with our most-loved features designed
          for modern learners.
        </p>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded shadow-lg hover:shadow-2xl border border-emerald-200 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-50 p-4 rounded-full shadow-inner">
                  {f.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
