import React from "react";
import { Link, NavLink } from "react-router";
import heroBg from "../assets/onlineStudy.jpg";
import { motion } from "motion/react";
import { FaUsers, FaBookOpen, FaChalkboardTeacher, FaLaptopCode, FaLightbulb, FaGlobe } from "react-icons/fa";
import { GiBrain, GiDiscussion } from "react-icons/gi";
import { MdOutlineQuiz } from "react-icons/md";

const Hero = () => {
  // Floating items array
  const floatingItems = [
    { icon: <FaBookOpen /> },
  { icon: <FaLaptopCode /> },
  { icon: <FaLightbulb /> },
  { icon: <FaChalkboardTeacher /> },
  { icon: <GiBrain /> },
  { icon: <FaGlobe /> },
  { icon: <GiDiscussion />},
  { icon: <MdOutlineQuiz /> },
  ];

  return (
    <div
      className="hero min-h-96 md:min-h-screen bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="hero-overlay  bg-opacity-70"></div>

      {/* Floating icons */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-gray-400 text-3xl flex flex-col items-center"
          style={{
            top: `${20 + index * 25}%`,
            left: index % 2 === 0 ? "10%" : "80%",
          }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.icon}
          <span className="text-xs mt-1 text-white">{item.label}</span>
        </motion.div>
      ))}

      {/* Content */}
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-2xl space-y-6">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 30 }}
            className="text-4xl md:text-5xl font-bold drop-shadow-lg text-white"
          >
            Study Smarter,{" "}
            <motion.span
              animate={{
                color: ["#10b981", 
                  "#10b981"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-emerald-400"
            >
              Together!
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-stone-50 text-lg font-medium"
          >
            Join peers, share ideas, solve quizzes, and grow your knowledge in a
            collaborative environment.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="flex justify-center gap-4"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-emerald-500 text-xl px-3 py-1 rounded"
                    : "text-white hover:bg-emerald-600 px-3 py-1 rounded font-semibold text-xl border border-emerald-400"
                }
              >
                Home
              </NavLink>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <NavLink
                to="/assignments"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-emerald-500 text-xl px-3 py-2 rounded"
                    : "text-white border border-emerald-400 px-3 py-1 rounded hover:bg-emerald-600 font-semibold text-xl"
                }
              >
                Assignments
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
