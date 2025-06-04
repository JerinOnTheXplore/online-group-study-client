import React from 'react';
import { Link, NavLink } from 'react-router';
import heroBg from '../assets/groupStudy.jpg'
import { motion } from "motion/react"
const Hero = () => {
    return (
        <div>
      <div
        className="hero min-h-96 md:min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl space-y-6">
            <motion.h1 
             initial={{scale: 0.5, opacity:0}}
             animate= {{scale: 1, opacity:1}}
             transition={{duration:1.2, type: "spring", stiffness:30, repeat:Infinity}}
            className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg text-white">
              Study Smarter, <motion.span
               animate={{color:["#f472b6", "#c084fc", "#60a5fa", "#f472b6"]}}
               transition={{ duration: 4, repeat: Infinity }}
              >Together!</motion.span>
            </motion.h1>
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
            visible: {
            transition: {
            staggerChildren: 0.2,
            },
          },
         }}
            className="flex justify-center gap-4">
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
          ? "text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-xl px-3 py-1 rounded"
          : "text-white hover:text-stone-300 font-semibold text-xl"
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
          ? "text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-xl px-3 py-1 rounded"
          : "text-white border-2 border-pink-200 px-2 rounded hover:text-stone-300 font-semibold text-xl"
      }
    >
      Assignments
    </NavLink>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Hero;