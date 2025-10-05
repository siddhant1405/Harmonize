import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/30 py-6 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Single-line copyright */}
        <p className="text-gray-400 text-sm mb-4">
          © {currentYear} <span className="font-semibold text-white">Harmonize</span> | All Rights Reserved
        </p>

        {/* Hardcoded links */}
        <div className="flex justify-center flex-wrap gap-6">
          <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition text-sm">
            Privacy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-blue-400 transition text-sm">
            Terms
          </a>
          <a href="/support" className="text-gray-400 hover:text-blue-400 transition text-sm">
            Support
          </a>
          <a href="/contact" className="text-gray-400 hover:text-blue-400 transition text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
