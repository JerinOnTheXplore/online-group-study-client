import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Navbar from '../../components/Navbar';
import { motion } from "motion/react"
import bgImg from '../../assets/welcome image.jpg'
import { AuthContext } from '../../provider/AuthContext';
import Swal from 'sweetalert2';


const Register = () => {
  const {createUser,updateUser,setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,email,photo,password);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: 'warning',
        title: 'Weak Password',
        text: 'Password must include uppercase, lowercase and be at least 6 characters long.',
      });
      return;
    }

    //create user
    createUser(email,password)
    .then(result=>{
     const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
        .then(()=>{
          setUser({...user,displayName: name, photoURL: photo});
          
        Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'Welcome to Edumates!',
        }).then(() => {
        navigate('/');
          });
        })
        .catch((error)=>{
           setUser(user);
           Swal.fire({
           icon: 'error',
           title: 'Profile Update Failed',
           text: error,
            });
        }) 
    })
    .catch(error=>{
       Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
        });
    })
  }
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
    <div className="w-full max-w-md bg-white/70 backdrop-blur-lg border p-8 mt-36 rounded-tr-[60px] rounded-tl-[50px] rounded-br-[50px] border-purple-400 to-blue-400 border-s-8 border-b-8">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
             Register to EduMates
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-purple-800 font-semibold mb-1">Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full bg-white/90 text-purple-900"
                placeholder="Your full name"
                required
              />
            </div>

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

            {/* Photo URL */}
            <div>
              <label className="block text-purple-800 font-semibold mb-1">Photo URL</label>
              <input
                name="photo"
                type="url"
                className="input input-bordered w-full bg-white/90 text-purple-900"
                placeholder="https://example.com/photo.jpg"
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
            >
              Register
            </button>

            {/* Already have an account */}
            <p className="text-center text-sm text-purple-700 pt-4">
              Already have an account?{' '}
              <NavLink
                to="/login"
                className="text-purple-900 font-bold underline hover:text-purple-600"
              >
                Login
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
      className="text-4xl md:text-5xl font-bold  drop-shadow-lg text-white">Ready to Team Up?</motion.h1>
      <p className="py-6 text-base md:text-xl lg:text-xl text-stone-100 font-medium">
       Join EduMates and discover the power of learning <br /> with peers. Your study journey just got <br /> a whole lot smarter.
      </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;