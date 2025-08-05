import React from "react";
import { Link } from "react-router-dom";

// Component Imports
import Header from "../components/Header";
import Footer from "../components/Footer";

// Icon Imports
import { FcGoogle } from "react-icons/fc";
import { FaSpotify } from "react-icons/fa";

// Asset Imports
import authImage from "../assets/images/bg2.png"; // Using the same image for consistency

const Signup = () => {
  // Placeholder handlers for OAuth signup
  const handleGoogleSignup = () => {
    console.log("Google Signup initiated");
  };

  const handleSpotifySignup = () => {
    console.log("Spotify Signup initiated");
  };

  // Define the navigation links for the header on this page
  const navLinks = [
    { href: "/samples", label: "Sample Library" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a]">
      {/* Radial Glow Layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(37,99,235,0.12)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(29,78,216,0.09)_0%,_transparent_50%)]"></div>
      </div>

      <Header navLinks={navLinks} ctaText="Login" ctaHref="/login" />

      <main className="flex-grow flex flex-col md:flex-row relative z-10">
        {/* Left Column: Full background */}
        <div
          className="hidden md:flex md:w-1/2 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${authImage})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/80 via-[#080808]/80 to-[#0a0f1a]/80"></div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold text-white text-center mb-4">
              Create an Account
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Join the community and start creating today.
            </p>

            {/* OAuth Buttons */}
            <div className="flex flex-col gap-4 mb-6">
              <button
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                <FcGoogle size={24} />
                Continue with Google
              </button>
              <button
                onClick={handleSpotifySignup}
                className="w-full flex items-center justify-center gap-3 bg-[#1DB954] text-white font-semibold py-3 rounded-lg hover:bg-[#1ED760] transition-all duration-300"
              >
                <FaSpotify size={24} />
                Continue with Spotify
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            {/* Email & Password Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                className="px-4 py-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded-lg bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-3 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
              >
                Create Account
              </button>
            </form>

            <div className="text-center mt-6">
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
