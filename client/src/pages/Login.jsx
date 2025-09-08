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

const Login = () => {
  const navigate = useNavigate();

  // --- Login Logic ---
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login successful, redirecting...");
    navigate("/collab");
  };

  const handleGoogleLogin = () => {
    // 1. Initiate Google OAuth flow
    console.log("Google Login initiated");
    // 2. On successful callback from Google, redirect
    navigate("/collab");
  };

  const handleSpotifyLogin = () => {
    // 1. Initiate Spotify OAuth flow
    console.log("Spotify Login initiated");
    // 2. On successful callback from Spotify, redirect
    navigate("/collab");
  };

  // --- Component Nav Links ---
  const navLinks = [
    { href: "/collab", label: "Visit the Community" },
    { href: "/about", label: "About Us" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a]">

      <Header navLinks={navLinks} ctaText="Sign Up" ctaHref="/signup" />

      <main className="flex-grow flex flex-col md:flex-row relative z-10">
        {/* Left Column: Changed bg-center to bg-right-center */}
        <div
          className="hidden md:flex md:w-1/2 relative bg-cover bg-right-center"
          style={{ backgroundImage: `url(${authImage})` }}
        ></div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2 md:mb-4">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-center mb-4 md:mb-6">
              Log in to continue your creative journey.
            </p>

            {/* OAuth Buttons */}
            <div className="flex flex-col gap-3 mb-4">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold py-2.5 rounded-lg hover:bg-gray-200 transition-all"
              >
                <FcGoogle size={22} />
                Continue with Google
              </button>
              <button
                onClick={handleSpotifyLogin}
                className="w-full flex items-center justify-center gap-3 bg-[#1DB954] text-white font-semibold py-2.5 rounded-lg hover:bg-[#1ED760] transition-all"
              >
                <FaSpotify size={22} />
                Continue with Spotify
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">
                OR
              </span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            {/* Email & Password Form */}
            <form className="flex flex-col gap-3" onSubmit={handleLogin}>
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
                Log In      
              </GradientButton>
            </form>

            <div className="text-center mt-4">
              <p className="text-gray-400">
                New to Harmonize?{" "}
                <Link to="/signup" className="text-blue-400 hover:underline">
                  Create an account
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

export default Login;
