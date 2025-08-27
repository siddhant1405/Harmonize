import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.png";
import GradientButton from "./GradientButton";

const Header = ({ navLinks, ctaText, ctaHref }) => {
  return (
    <header className="top-0 left-0 w-full z-20">
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
            <GradientButton to={ctaHref} size="small" variant="blue" glow={true}>
              {ctaText}
            </GradientButton>
        </div>
      </div>
    </header>
  );
};

export default Header;