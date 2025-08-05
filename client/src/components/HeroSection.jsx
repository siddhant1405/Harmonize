import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/images/ad.mp4"; // Assuming video is in a 'videos' folder

const Hero = ({ title, subtitle, description, primaryCTA, secondaryCTA }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* --- 1. Full-screen Video Background --- */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline // Important for iOS devices
        className="absolute top-0 left-0 w-full h-full object-cover z-0 backdrop-blur-[0.5px]"
      />
      
      {/* --- 2. Protective Dark Overlay --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* --- 3. Centered Content --- */}
      <div className="relative z-20 px-6 flex flex-col items-center">
        {/* Subtitle / Super-heading */}
        <p className="text-blue-400 font-semibold tracking-widest text-lg md:text-xl mb-4">
          {subtitle}
        </p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {primaryCTA && (
            <Link
              to={primaryCTA.href}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-transform duration-300"
            >
              {primaryCTA.label}
            </Link>
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.href} // Use <a> for in-page scroll links
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
