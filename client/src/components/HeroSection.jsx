import React from "react";
import heroVideo from "../assets/images/ad.mp4";
import Button from "../components/GradientButton";

const Hero = ({ title, subtitle, description, primaryCTA, secondaryCTA }) => {
  return (
    <section className="relative h-screen flex items-start justify-center text-center pt-32 md:pt-52">
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
      />

      {/* Semi-Transparent Overlay with Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 px-6 flex flex-col items-center max-w-4xl">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-montserrat text-white mb-4 leading-tight drop-shadow-lg">
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
            <Button to={primaryCTA.href} size="large" variant="blue" glow={true}>
              {primaryCTA.label}
            </Button>
          )}
          {secondaryCTA && (
            <Button to={secondaryCTA.href} size="large" variant="transparent" glow={false}>
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
