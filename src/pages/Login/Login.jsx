import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import Navbar from '../../components/Navbar';
import { motion } from "motion/react";
import bgImg from '../../assets/welcome image.jpg';
import { AuthContext } from '../../provider/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          icon: 'success',
          title: 'Signed in successfully!',
          text: `Welcome, ${result.user.displayName || 'User'}!`,
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: 'error',
          title: 'Sign In Failed',
          text: errorMessage,
          confirmButtonColor: '#16a34a'  // emerald redirection to green-ish color
        });
      })
      .finally(() => setLoading(false));
  };

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          text: `Welcome, ${user.displayName || 'User'}!`,
          timer: 1500
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message || 'Please check your credentials',
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
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-overlay bg-white/80"></div>

        <div className="hero-content flex-col lg:flex-row px-4">
          <div className=" items-center min-h-screen w-full max-w-md">
            <div className="px-8 max-w-xl text-center">
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
              className="text-2xl md:text-4xl font-bold drop-shadow-lg text-emerald-900"
            >
              Good to see you again!<br /> Let’s get learning.
            </motion.h1>
          </div>
            <div className="w-full bg-white rounded-tr-[60px] rounded-tl-[50px] rounded-br-[50px] border border-emerald-300 shadow-lg p-8 mt-5">
              <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">
                LogIn to Your Account
              </h2>
              <form onSubmit={handleLogin} className="space-y-5">
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

                {/* Forgot Password */}
                <div className="text-right">
                  <span className="text-sm text-emerald-700 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>

                {error && <p className="text-red-500 text-xs">{error}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full shadow-lg shadow-emerald-300"
                  disabled={loading}
                >
                  LogIn
                </button>

                <div className='divider text-emerald-700'>OR</div>

                <button
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className={`btn w-full ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-white"} text-emerald-900 border border-emerald-400 flex justify-center items-center gap-2`}
                >
                  <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>

                <p className="text-center text-sm text-emerald-700 pt-4">
                  Don't have an account?{' '}
                  <NavLink
                    to="/register"
                    className="text-emerald-900 font-bold underline hover:text-emerald-600"
                  >
                    Register
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

export default Login;
