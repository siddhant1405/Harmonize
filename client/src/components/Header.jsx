import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/images/logo2.png";
import GradientButton from "./GradientButton";

const Header = ({ navLinks, ctaText, ctaHref }) => {
  const location = useLocation();
  const isLanding = location.pathname === "/"; // Fixed only on landing page

  return (
    <header
      className={`w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 ${
        isLanding ? "fixed top-0 left-0 right-0" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo + Title linked to Home */}
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Harmonize Logo" className="h-10 w-auto mr-2" />
          <span className="text-white font-bold text-2xl tracking-wide">Harmonize</span>
        </Link>

        {/* Navigation + CTA */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-blue-400 transition">
                {link.label}
              </a>
            ))}
          </nav>
          <GradientButton to={ctaHref} size="small" variant="blue" glow={true}>
            {ctaText}
          </GradientButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
