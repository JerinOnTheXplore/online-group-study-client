import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
        <footer className="bg-gradient-to-r from-purple-700 via-pink-500 to-cyan-700 text-white pt-12 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div>
          <h2 className="text-2xl font-bold mb-4">EduMate</h2>
          <p className="opacity-90">
            Empowering learners through peer-reviewed assignments and collaborative growth. Submit, evaluate, and succeed together.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/assignments" className="hover:underline">Assignments</a></li>
            <li><a href="/create-assignment" className="hover:underline">Create Assignment</a></li>
            <li><a href="/pending" className="hover:underline">Pending Reviews</a></li>
            <li><a href="/my-submissions" className="hover:underline">My Submissions</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="mailto:team@edumate.com" className="hover:text-gray-300 transition"><FaEnvelope /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition"><FaFacebookF /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition"><FaLinkedinIn /></a>
          </div>
          <p className="mt-4 opacity-80">Email: team@edumate.com</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <img src="https://via.placeholder.com/100x100" alt="Footer Img 1" className="rounded-lg" />
            <img src="https://via.placeholder.com/100x100" alt="Footer Img 2" className="rounded-lg" />
            <img src="https://via.placeholder.com/100x100" alt="Footer Img 3" className="rounded-lg" />
            <img src="https://via.placeholder.com/100x100" alt="Footer Img 4" className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-20 mt-10 pt-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} EduMate. All rights reserved.
      </div>
    </footer>   
        </div>
    );
};

export default Footer;