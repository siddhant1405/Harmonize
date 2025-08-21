import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause, FaTrophy } from "react-icons/fa";

// Corrected component name to match export
const ProducerOfTheWeek = ({
  audioUrl,
  genre = "Electronic", // Default value
  weekNumber = 1, // Default value
  uploaderFullName = "Anonymous", // Default value
  uploader = "@anonymous", // Default value
  uploaderImage,
  trackTitle = "Untitled", // Default value
}) => {
  const waveformRef = useRef(null);
  // ... (rest of the component logic remains the same)

  return (
    <section className="relative z-10 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Producer of the Week
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] backdrop-blur-lg border border-blue-400/30 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 flex flex-col items-center">
          
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg transform rotate-6">
            <div className="flex items-center gap-2">
              <FaTrophy />
              {/* This now uses the prop */}
              <span>Week {weekNumber}</span>
            </div>
          </div>
          
          <div className="relative mb-5">
            <img
              src={uploaderImage}
              alt={uploader}
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-500/80 shadow-lg"
            />
          </div>

          <h3 className="text-white text-5xl font-extrabold tracking-wider">
            {/* This will no longer crash because of the default value */}
            {uploaderFullName.toUpperCase()}
          </h3>
          <p className="text-blue-400 text-2xl font-light mt-1">{uploader}</p>
          <p className="text-gray-300 text-xl mt-4">{trackTitle}</p>
          
          <div className="flex items-center justify-center gap-4 my-6">
            <span className="flex items-center gap-2 bg-yellow-400/20 text-yellow-300 text-xs font-bold px-3 py-1.5 rounded-full">
              <FaTrophy size={12} />
              Week {weekNumber}
            </span>
            <span className="bg-white/10 text-gray-300 text-xs font-bold px-3 py-1.5 rounded-full">
              Genre: {genre}
            </span>
          </div>
          
          {/* ... (rest of the JSX remains the same) ... */}
        </div>
      </div>
    </section>
  );
};

// Ensure the export name is correct
export default ProducerOfTheWeek;

