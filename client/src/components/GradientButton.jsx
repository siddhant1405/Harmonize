import React from "react";
import { Link } from "react-router-dom";

const GradientButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-transform duration-300"
    >
      {children}
    </Link>
  );
};

export default GradientButton;
