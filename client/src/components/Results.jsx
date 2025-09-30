// src/components/CollabResults.js

import React from "react";
import { FaStar, FaMapMarkerAlt, FaSpotify, FaSoundcloud, FaInstagram, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CollabResults = ({ matches }) => (
  <motion.div 
    className="w-full relative z-10"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <div className="bg-green-500/20 text-green-400 font-bold px-6 py-2 rounded-full border border-green-500/30">
          <FaStar className="inline mr-2" />
          Top 5 Matches Found!
        </div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-3">Your Perfect Creative Partners</h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        These artists align with your style, goals, and creative energy. Start connecting and make magic happen.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
      {matches.map((artist) => (
        <div key={artist.id} className="bg-white/5 rounded-xl p-6 text-center flex flex-col hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 border border-transparent">
          <img 
            src={`https://i.pravatar.cc/150?u=${artist.id}`} 
            alt={artist.name} 
            className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white/10 mb-4"
          />
          
          <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
          <p className="text-blue-300 text-sm mb-2">{artist.role}</p>
          <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-3">
            <FaMapMarkerAlt className="text-gray-500" />
            <span>{artist.location}</span>
          </div>
          <div className="text-green-400 font-bold text-xl bg-green-500/10 px-4 py-2 rounded-full mb-3">
            {artist.match}% Match
          </div>
          <div className="flex justify-center gap-2 mb-4">
            {artist.socials.spotify && <FaSpotify className="text-green-500" />}
            {artist.socials.soundcloud && <FaSoundcloud className="text-orange-500" />}
            {artist.socials.instagram && <FaInstagram className="text-pink-500" />}
          </div>
          <button className="w-full mt-auto bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-blue-500 transition-colors">
            View Profile
          </button>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <button className="text-gray-400 hover:text-white font-semibold transition-colors">
        Show More Matches <FaArrowRight className="inline ml-2" />
      </button>
    </div>
  </motion.div>
);

export default CollabResults;
