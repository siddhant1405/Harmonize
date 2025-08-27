import React from "react";
import { Link } from "react-router-dom";

const sizeClasses = {
  small: "px-6 py-2 rounded-lg text-sm font-semibold",
  medium: "px-8 py-3 rounded-lg text-base font-semibold",
  large: "px-10 py-4 rounded-xl text-lg font-semibold",
};

const variantClasses = {
  blue: "bg-gradient-to-r from-blue-500 to-blue-700 text-white transition-transform duration-300",
  transparent:
    "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300",
};

const glowClasses = {
  small: "hover:shadow-[0_0_20px_#2563eb]",
  medium: "hover:shadow-[0_0_25px_#2563eb]",
  large: "hover:shadow-[0_0_30px_#2563eb]",
};

const Button = ({
  to,
  children,
  size = "medium",
  variant = "blue",
  type = "button",
  icon,
  glow = true,
  ...props
}) => {
  const baseClasses = `${sizeClasses[size]} flex items-center justify-center gap-2`;

  // Determine final classes
  let classes = "";
  if (glow) {
    // Glow enabled → original gradient + glow
    classes = `${variantClasses[variant]} ${baseClasses} ${glowClasses[size]}`;
  } else if (variant === "blue") {
    // Glow disabled & blue → solid blue that darkens on hover/click
    classes = `${baseClasses} bg-blue-600 text-white hover:bg-blue-800 active:bg-blue-800 transition-colors duration-300`;
  } else {
    // Other variants → fallback
    classes = `${variantClasses[variant]} ${baseClasses}`;
  }

  // External link
  if (to?.startsWith("http")) {
    return (
      <a href={to} className={classes} {...props}>
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </a>
    );
  }

  // Internal link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </Link>
    );
  }

  // Normal button
  return (
    <button type={type} className={classes} {...props}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
