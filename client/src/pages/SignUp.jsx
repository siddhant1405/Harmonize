import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Component Imports
import Header from "../components/Header";
import Footer from "../components/Footer";
import GradientButton from "../components/GradientButton";
// Icon Imports
import { FcGoogle } from "react-icons/fc";
import { FaSpotify } from "react-icons/fa";

// Asset Imports
import authImage from "../assets/images/hero.jpg";

const Signup = () => {
  const navigate = useNavigate();

  // --- Signup Logic ---
  const handleSubmit = (e) => {
    e.preventDefault();
    // **
    // ** 1. ADD YOUR BACKEND API CALL HERE for user registration **
    // **
    // 2. On success, redirect to the sample library
    console.log("Signup successful, redirecting...");
    navigate("/findcollab");
  };

  const handleGoogleSignup = () => {
    // 1. Initiate Google OAuth flow
    console.log("Google Signup initiated");
    // 2. On successful callback, redirect
    navigate("/findcollab");
  };

  const handleSpotifySignup = () => {
    // 1. Initiate Spotify OAuth flow
    console.log("Spotify Signup initiated");
    // 2. On successful callback, redirect
    navigate("/findcollab");
  };

  // --- Component Nav Links ---
  const navLinks = [
    { href: "/findcollab", label: "Visit the Community" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a]">

      <Header navLinks={navLinks} ctaText="Login" ctaHref="/login" />

      <main className="flex-grow flex flex-col md:flex-row relative z-10">
        {/* Left Column */}
        <div
          className="hidden md:flex md:w-1/2 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${authImage})` }}
        >
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2 md:mb-4">
              Create an Account
            </h1>
            <p className="text-gray-400 text-center mb-4 md:mb-6">
              Join the community and start creating.
            </p>

            {/* OAuth Buttons */}
            <div className="flex flex-col gap-3 mb-4">
              <button
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold py-2.5 rounded-lg hover:bg-gray-200 transition-all"
              >
                <FcGoogle size={22} />
                Continue with Google
              </button>
              <button
                onClick={handleSpotifySignup}
                className="w-full flex items-center justify-center gap-3 bg-[#1DB954] text-white font-semibold py-2.5 rounded-lg hover:bg-[#1ED760] transition-all"
              >
                <FaSpotify size={22} />
                Continue with Spotify
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            {/* Email & Password Form */}
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                required
                className="px-4 py-2.5 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="px-4 py-2.5 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="px-4 py-2.5 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <GradientButton type="submit" size="large" variant="blue" glow={false}>
                Create Account 
              </GradientButton>
            </form>

            <div className="text-center mt-4">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-400 hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer
        tagline="A global community, built by and for creators."
        links={[{ href: "#", label: "Privacy" }, { href: "#", label: "Terms" }]}
      />
    </div>
  );
};

export default Signup;
