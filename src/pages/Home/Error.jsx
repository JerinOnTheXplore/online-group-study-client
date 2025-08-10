import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6">
      
      <h1 className="text-7xl md:text-9xl font-extrabold mb-6 text-center drop-shadow-lg">
        Oops! Page Not Found
      </h1>
      
      <p className="text-xl md:text-3xl text-center mb-10 max-w-lg drop-shadow-md">
        The page you’re looking for doesn’t exist. But don’t worry — let’s get you back on track!
      </p>
      
      <Link
        to="/"
        className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full hover:bg-pink-100 transition duration-300 shadow-lg"
      >
        Go Home
      </Link>
    </div>    
        </div>
    );
};

export default Error;