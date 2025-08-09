import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import footer1 from "../assets/welcome image.jpg";
import footer2 from "../assets/groupStudy.jpg";
import footer3 from "../assets/group3.jpg";
import footer4 from "../assets/group4.jpg";

const Footer = () => {
  return (
    <footer className="bg-emerald-500 text-stone-50 pt-12 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div>
          <h2 className="text-2xl font-bold mb-4">𝓮𝓭𝓾𝓶𝓪𝓽𝓮𝓼</h2>
          <p className="opacity-90 text-stone-50 font-medium">
            Empowering learners through peer-reviewed assignments and collaborative growth. Submit, evaluate, and succeed together.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline hover:text-gray-700 transition font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="/assignments" className="hover:underline hover:text-gray-700 transition font-medium">
                Assignments
              </a>
            </li>
            <li>
              <a href="/create-assignment" className="hover:underline hover:text-gray-700 transition font-medium">
                Create Assignment
              </a>
            </li>
            <li>
              <a href="/pending" className="hover:underline hover:text-gray-700 transition font-medium">
                Pending Reviews
              </a>
            </li>
            <li>
              <a href="/my-submissions" className="hover:underline hover:text-gray-700 transition font-medium">
                My Submissions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="mailto:jerinjerin101325@gmail.com" className="hover:underline hover:text-gray-700 transition font-medium">
              <FaEnvelope />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline hover:text-gray-700 transition font-medium">
              <FaFacebookF />
            </a>
            <a href="https://github.com/JerinOnTheXplore" target="_blank" rel="noreferrer" className="hover:underline hover:text-gray-700 transition font-medium">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nasrinjerin" target="_blank" rel="noreferrer" className="hover:underline hover:text-gray-700 transition font-medium">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="mt-4 opacity-80 text-stone-50 font-medium">Email: team@edumate.com</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <img src={footer1} alt="Footer Img 1" className="rounded-lg" />
            <img src={footer2} alt="Footer Img 2" className="rounded-lg" />
            <img src={footer3} alt="Footer Img 3" className="rounded-lg" />
            <img src={footer4} alt="Footer Img 4" className="rounded-lg" />
          </div>
        </div>
      </div>

      <div className="border-t border-white border-opacity-20 mt-10 pt-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} EduMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
