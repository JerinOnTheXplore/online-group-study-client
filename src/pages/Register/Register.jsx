import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import Navbar from '../../components/Navbar';
import { motion } from "motion/react";
import bgImg from '../../assets/welcome image.jpg';
import { AuthContext } from '../../provider/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: 'warning',
        title: 'Weak Password',
        text: 'Password must include uppercase, lowercase and be at least 6 characters long.',
      });
      return;
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            Swal.fire({
              icon: 'success',
              title: 'Registration Successful!',
              text: 'Welcome to EduMates!',
            }).then(() => {
              navigate('/');
            });
          })
          .catch((error) => {
            setUser(user);
            Swal.fire({
              icon: 'error',
              title: 'Profile Update Failed',
              text: error.message || error,
            });
          });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message,
        });
      });
  };

  return (
    <div>
      <Navbar />
      <div
        className="hero min-h-screen bg-emerald-50"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-white/80"></div>

        <div className="hero-content flex-col lg:flex-row px-4">
          <div className=" justify-center items-center min-h-screen px-4  w-full max-w-md">
            <div className="px-8 max-w-lg text-center">
            <motion.h1
              animate={{
                color: [
                  "#34d399",
                  "#10b981",
                  "#059669",
                  "#34d399",
                  "#047857",
                  "#065f46",
                  "#10b981"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-4xl md:text-5xl font-bold drop-shadow-lg text-emerald-900"
            >
              Ready to Team Up?
            </motion.h1>
          </div>
            <div className="w-full bg-white rounded-tr-[60px] rounded-tl-[50px] rounded-br-[50px] border border-emerald-300 p-8 mt-5 shadow-lg">
              <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">
                Register to EduMates
              </h2>
              <form onSubmit={handleRegister} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-emerald-800 font-semibold mb-1">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input input-bordered w-full bg-white text-emerald-900 border-emerald-300 focus:ring-emerald-400"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-emerald-800 font-semibold mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input input-bordered w-full bg-white text-emerald-900 border-emerald-300 focus:ring-emerald-400"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Photo URL */}
                <div>
                  <label className="block text-emerald-800 font-semibold mb-1">Photo URL</label>
                  <input
                    name="photo"
                    type="url"
                    className="input input-bordered w-full bg-white text-emerald-900 border-emerald-300 focus:ring-emerald-400"
                    placeholder="https://example.com/photo.jpg"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-emerald-800 font-semibold mb-1">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input input-bordered w-full bg-white text-emerald-900 border-emerald-300 focus:ring-emerald-400"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full shadow-lg shadow-emerald-300"
                >
                  Register
                </button>

                {/* Already have an account */}
                <p className="text-center text-sm text-emerald-700 pt-4">
                  Already have an account?{' '}
                  <NavLink
                    to="/login"
                    className="text-emerald-900 font-bold underline hover:text-emerald-600"
                  >
                    Login
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
