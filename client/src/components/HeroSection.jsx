import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/images/ad.mp4";

const Hero = ({ title, subtitle, description, primaryCTA, secondaryCTA }) => {
  return (
    <section className="relative h-screen flex items-start justify-center text-center pt-32 md:pt-42">
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Semi-Transparent Overlay with Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40  z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 px-6 flex flex-col items-center max-w-4xl">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 leading-tight drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
          {title}
        </h1>

        {/* Subtitle Below Title */}
        <p className="text-blue-400 font-semibold italic tracking-wide text-lg md:text-2xl mb-8">
          &ldquo;{subtitle}&rdquo;
        </p>

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {primaryCTA && (
            <Link
              to={primaryCTA.href}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-[0_0_30px_#2563eb] transition-all duration-300"
            >
              {primaryCTA.label}
            </Link>
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
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
