// src/components/CollabResults.js

import React, { useState, useRef, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

// --- A New, Reusable Mini Audio Player Component ---
const MiniAudioPlayer = ({ track }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause
  const togglePlayback = (e) => {
    e.stopPropagation(); // Prevents the card's link from firing
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-3 rounded-xl flex items-center gap-3 mt-4 mb-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/15 hover:to-blue-500/20 border border-white/10 hover:border-blue-400/40 shadow-md hover:shadow-lg">
      {/* Invisible audio element */}
      <audio 
        ref={audioRef} 
        src={track.url} 
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
      
      {/* Play/Pause Button */}
      <button 
        onClick={togglePlayback}
        className="bg-gradient-to-br from-blue-600 to-blue-500 w-11 h-11 flex-shrink-0 rounded-lg flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-md hover:shadow-blue-500/50 hover:scale-110"
        aria-label={isPlaying ? "Pause track" : "Play track"}
      >
        {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
      </button>

      {/* Track Name */}
      <div className="flex-grow text-left overflow-hidden">
        <p className="text-sm font-semibold text-white truncate" title={track.name}>
          {track.name}
        </p>
        <p className="text-xs text-blue-300 font-medium">Spotlight Track</p>
      </div>
    </div>
  );
};


const CollabResults = ({ matches }) => {
  useEffect(() => {
    if (matches && matches.length > 0) {
      toast.success("Found top 5 matches for you!", {
        duration: 4000,
        position: "top-center",
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        icon: '✅',
      });
    }
  }, [matches]);

  return (
    <>
      <Toaster position="top-center" />

      <motion.div
        className="w-full relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        {/* HEADER */}
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-5xl font-bold mb-3">Your Perfect Creative Partners</h2>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             These artists align with your style, goals, and creative energy. Start connecting and make magic happen.
           </p>
        </div>

        {/* MATCH CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {matches.map((artist) => (
            <motion.div
              key={artist.id}
              className="group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-2xl p-6 text-center flex flex-col hover:to-transparent hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-white/10 hover:border-blue-400/50 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -8 }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="relative mb-4">
                  <img
                    src={`https://i.pravatar.cc/150?u=${artist.id}`}
                    alt={artist.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-white/20 shadow-lg group-hover:border-blue-400/60 transition-all duration-300"
                  />
                  {/* Match badge overlay */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-400 text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-lg">
                    {artist.match}%
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1 mt-4 group-hover:text-blue-300 transition-colors">{artist.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-2">{artist.role}</p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-4">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>{artist.location}</span>
                </div>

                {/* UPDATED: Spotlight Track Player */}
                <MiniAudioPlayer track={artist.topTrack} />

                <button className="w-full mt-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 group-hover:scale-105">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SHOW MORE */}
        <div className="text-center mt-12">
          <button className="text-gray-400 hover:text-white font-semibold transition-colors">
            Show More Matches <FaArrowRight className="inline ml-2" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default CollabResults;