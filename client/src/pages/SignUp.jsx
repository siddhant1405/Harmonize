import React from "react";
import { Link } from "react-router-dom"; // Use Link for better navigation

const Signup = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#0B1020] to-[#151515]">
      <div className="w-full max-w-md bg-white/10 backdrop-blur rounded-xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Create Your Account
        </h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-3 rounded bg-black/30 text-white border border-pink-400/20 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded bg-black/30 text-white border border-pink-400/20 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded bg-black/30 text-white border border-pink-400/20 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-amber-400 to-pink-500 text-white py-3 mt-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Create Account
          </button>
        </form>
        <div className="text-center mt-6">
          <Link to="/login" className="text-pink-400 hover:underline">
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
