import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaBookOpen, FaUsers } from 'react-icons/fa6';

const Features = () => {
  const features = [
    {
      icon: <FaBookOpen className="text-purple-500 text-5xl mb-4" />,
      title: "Smart Assignments",
      desc: "Design, submit, and manage assignments effortlessly with deadline & marks tracking.",
    },
    {
      icon: <FaUsers className="text-pink-500 text-5xl mb-4" />,
      title: "Group Collaboration",
      desc: "Team up with peers, exchange ideas, and grade each other to grow together.",
    },
    {
      icon: <FaCheckCircle className="text-blue-500 text-5xl mb-4" />,
      title: "Instant Evaluation",
      desc: "Real-time feedback & grading system to boost learning speed and accuracy.",
    },
  ];

    return (
        <div>
        <section className="relative py-20 bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200 overflow-hidden">
      {/* Gradient rings background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-3xl animate-ping -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 mb-6">
          Discover What Makes Edumates Unique
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Elevate your online group study with our most-loved features designed for modern learners.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-white/40 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full shadow-lg">{f.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section> 
        </div>
    );
};

export default Features;