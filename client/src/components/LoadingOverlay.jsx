// src/components/LoadingOverlay.js

import React from "react";
import { motion } from "framer-motion";

// A small component for the animated ellipsis "..."
const AnimatedDots = () => (
  <span className="inline-flex ml-1">
    {[...Array(3)].map((_, i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-0.5"
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </span>
);

const LoadingOverlay = () => (
  <motion.div
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >

    {/* Animated Text below the rings */}
    <motion.p
      className="text-xl font-bold text-white mt-8 flex items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Finding Collaborators
      <AnimatedDots />
    </motion.p>
  </motion.div>
);

export default LoadingOverlay;
