// src/components/CollabForm.js

import React, { useState } from "react";
import { FaUser, FaUsers, FaMusic, FaMapMarkerAlt, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { roles, genres } from "../utils/musicData"; 
import { motion } from "framer-motion";

// --- INLINE FormSelect ---
const FormSelect = ({ icon, name, options, placeholder, value, onChange, disabled, required }) => (
  <div className="relative group">
    <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 z-10 group-hover:text-blue-400 transition-colors">
      {icon}
    </div>
    <select 
      name={name} 
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-10 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer hover:bg-white/10 hover:border-blue-500/30"
    >
      <option value="" disabled className="bg-gray-900">{placeholder}</option>
      {options.map((option, idx) => {
        const optionValue = typeof option === "object" ? option.value : option;
        return (
          <option key={idx} value={optionValue} className="bg-gray-900 text-white">
            {optionValue}
          </option>
        );
      })}
    </select>
    <FaChevronDown className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
);

// --- MAIN CollabForm ---
const CollabForm = ({ onSearch }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedUserRole, setSelectedUserRole] = useState("");
  const [selectedLookingFor, setSelectedLookingFor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    onSearch(formData); // Pass data up and trigger the search
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto w-full relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Find the perfect collaborator for your next hit!
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Stop scrolling endlessly and dming random people. Let our AI analyze your style, goals, and vibe
          to connect you with collaborators who actually <span className="text-blue-400 font-semibold">get it</span>.
        </p>
      </div>
      
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-10"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
            Who are you? <span className="text-red-400">*</span>
          </label>
          <FormSelect 
            name="userRole" 
            options={roles} 
            icon={<FaUser />} 
            placeholder="Select your role"
            value={selectedUserRole}
            onChange={(e) => setSelectedUserRole(e.target.value)}
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
            Who are you looking for? <span className="text-red-400">*</span>
          </label>
          <FormSelect 
            name="lookingFor" 
            options={roles} 
            icon={<FaUsers />} 
            placeholder="Select collaborator role"
            value={selectedLookingFor}
            onChange={(e) => setSelectedLookingFor(e.target.value)}
            required 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
              Genre <span className="text-red-400">*</span>
            </label>
            <FormSelect 
              name="genre" 
              options={Object.keys(genres)} 
              icon={<FaMusic />} 
              placeholder="Choose main genre"
              value={selectedGenre} 
              onChange={(e) => setSelectedGenre(e.target.value)} 
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
              Subgenre
            </label>
            <FormSelect 
              name="subgenre" 
              options={selectedGenre ? ["None", ...genres[selectedGenre]] : ["None"]} 
              icon={<FaMusic />} 
              placeholder="Choose subgenre"
              disabled={!selectedGenre} 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
            Describe your project <span className="text-gray-500">(Optional)</span>
          </label>
          <textarea
            name="projectDescription"
            placeholder="Can't fit yourself into a box? Tell us more about the project and vibe you're going for..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 h-36 text-white placeholder-gray-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-6 sm:gap-0 border-t border-white/10">
          <label className="flex items-center gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors group">
            <input 
              type="checkbox" 
              name="findNearby" 
              className="h-5 w-5 rounded bg-white/10 border-white/20 text-blue-500 cursor-pointer"
            />
            <span className="select-none">Find people near me</span>
            <FaMapMarkerAlt className="text-gray-400 group-hover:text-blue-400 transition-colors"/>
          </label>
          
          <button 
            type="submit" 
            className="bg-blue-600 font-bold py-3.5 px-8 rounded-lg hover:bg-blue-500 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center group"
          >
            Find My Match 
            <FaArrowRight />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default CollabForm;
