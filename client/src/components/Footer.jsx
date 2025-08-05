import React from "react";

const Footer = ({ links }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-blue-500/15 bg-black/30 py-6 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Single-line copyright */}
        <p className="text-gray-400 text-sm mb-4">
          © {currentYear} <span className="font-semibold text-white">Loop Labs</span> | All Rights Reserved
        </p>

        {/* Links in a single row */}
        <div className="flex justify-center flex-wrap gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-blue-400 transition text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
