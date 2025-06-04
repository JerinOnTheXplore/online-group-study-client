import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../components/Navbar';

const Register = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-lime-100 to-lime-200 px-4">
  <div className="card w-full max-w-md bg-lime-50 shadow-2xl rounded-2xl p-8">
    <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
      🌿 Please Register
    </h2>
    <form className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-green-800 font-semibold mb-1">Name</label>
        <input
          name="name"
          type="text"
          className="input input-bordered w-full bg-white text-green-900"
          placeholder="Your  name"
          required
        />
      </div>
      {/* Email */}
      <div>
        <label className="block text-green-800 font-semibold mb-1">Email</label>
        <input
          name="email"
          type="email"
          className="input input-bordered w-full bg-white text-green-900"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Photo URL */}
      <div>
        <label className="block text-green-800 font-semibold mb-1">Photo URL</label>
        <input
          name="photo"
          type="text"
          className="input input-bordered w-full bg-white text-green-900"
          placeholder="Photo URL"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-green-800 font-semibold mb-1">Password</label>
        <input
          name="password"
          type="password"
          className="input input-bordered w-full bg-white text-green-900"
          placeholder="Enter your password"
          required
        />
      </div>

      {/* Forgot Password Link */}
      <div className="text-right">
        <a className="text-sm text-green-700 hover:underline cursor-pointer">
          Forgot password?
        </a>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn bg-green-700 hover:bg-green-800 text-white w-full">
        Register
      </button>

      {/* Register Link */}
      <p className="text-center text-sm text-green-800 pt-4">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-green-900 font-bold underline">
          Login
        </Link>
      </p>
    </form>
  </div>
</div>    
        </div>
    );
};

export default Register;