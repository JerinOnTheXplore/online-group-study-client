import React from "react";
import { FaCheckCircle, FaBookOpen, FaUsers, FaQuestionCircle, FaShareAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBookOpen className="text-emerald-500 text-xl" />,
      title: "Smart Assignments",
      desc: "Design, submit, and manage assignments effortlessly with deadline & marks tracking.",
    },
    {
      icon: <FaUsers className="text-emerald-600 text-2xl" />,
      title: "Group Collaboration",
      desc: "Team up with peers, exchange ideas, and grade each other to grow together.",
    },
    {
      icon: <FaCheckCircle className="text-emerald-700 text-2xl" />,
      title: "Instant Evaluation",
      desc: "Real-time feedback & grading system to boost learning speed and accuracy.",
    },
    {
      icon: <FaQuestionCircle className="text-emerald-500 text-2xl" />,
      title: "Live Quiz Sessions",
      desc: "Engage in interactive quizzes to test knowledge and prepare effectively.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-6xl   text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700 mb-6">
          Discover What Makes Edumates Unique
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Elevate your online group study with our most-loved features designed
          for modern learners.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-10 lg:p-8 rounded shadow-lg hover:shadow-2xl border border-emerald-200 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-50 p-4 rounded-full shadow-inner">
                  {f.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
