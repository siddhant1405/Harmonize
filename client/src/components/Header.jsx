import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.png";

const Header = ({ navLinks, ctaText, ctaHref }) => {
  return (
    <header className="top-0 left-0 w-full z-20 backdrop-blur-md border-b border-blue-500/15 bg-black/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo + Title linked to Home */}
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="Harmonize Logo"
            className="h-10 w-auto mr-2"
          />
          <span className="text-white font-bold text-2xl tracking-wide">Harmonize</span>
        </Link>

        {/* Navigation + CTA */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={ctaHref}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_#2563eb] transition"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
