import React from 'react';
import { NavLink } from 'react-router';
import Navbar from '../../components/Navbar';
import { motion } from "motion/react"
import bgImg from '../../assets/welcome image.jpg'


const Login = () => {
    return (
        <div>
        <Navbar></Navbar>
         <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${bgImg})`,
  }}
>
  <div className="hero-overlay"></div>
  
  <div className="hero-content flex-col lg:flex-row">
    <div className="flex justify-center items-center min-h-screen px-4 py-12">
    <div className="w-full max-w-md bg-white/70 backdrop-blur-lg border shadow-xl  p-8 mt-36 rounded-tr-[60px] rounded-tl-[50px] rounded-br-[50px] border-purple-400 to-blue-400 border-s-8 border-b-8">
    <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
    LogIn to Your Account
    </h2>
    <form className="space-y-4">
    {/* Email */}
    <div>
    <label className="block text-purple-800 font-semibold mb-1">Email</label>
    <input
    name="email"
    type="email"
    className="input input-bordered w-full bg-white/90 text-purple-900"
    placeholder="you@example.com"
    required
    />
    </div>
    {/* Password */}
    <div>
    <label className="block text-purple-800 font-semibold mb-1">Password</label>
    <input
    name="password"
    type="password"
    className="input input-bordered w-full bg-white/90 text-purple-900"
     placeholder="Enter your password"
    required
    />
   </div>

   {/* Forgot Password */}
    <div className="text-right">
    <span className="text-sm text-purple-700 hover:underline cursor-pointer">
    Forgot password?
    </span>
    </div>

    {/* Submit Button */}
    <button
    type="submit"
    className="btn bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:brightness-110 w-full shadow-lg shadow-purple-300"
    >LogIn
    </button>
    <button className="btn w-full bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
  <p className="text-center text-sm text-purple-700 pt-4">Don't have an account?
  <NavLink to="/register"
  className="text-purple-900 font-bold underline hover:text-purple-600">
  Register
  </NavLink>
 </p>
</form>
</div>
</div>
    <div>
      <motion.h1
      animate={{color:["#f472b6", "#c084fc", 
      "#60a5fa", 
      "#f472b6",
      "#ec4899",
      "#d8b4fe",
      "#38bdf8"
        ]}}
        transition={{ duration: 4, repeat: Infinity }}
      className="text-4xl md:text-5xl font-bold  drop-shadow-lg text-white">Good to see you again!<br/> Let’s get learning.</motion.h1>
      <p className="py-6 text-base md:text-xl lg:text-xl text-stone-100 font-medium">
       Learning becomes powerful when shared. <br /> At EduMates, we believe in  growing together. <br /> LogIn to access your study groups, collaborate on assignments,<br /> and support each other's success.
      </p>
    </div>
  </div>
</div>
</div> 
        
    );
};

export default Login;