import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#08080D] via-[#0B1020] to-[#151515]">
      <div className="bg-white/10 backdrop-blur rounded-2xl shadow-lg max-w-3xl w-full p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Loop Labs</h1>
        <p className="text-lg text-gray-300 mb-6">
          Loop Labs is a community-driven platform where music producers discover, share, and collaborate on loops and samples. Our mission is to empower creation, foster collaboration, and help musicians grow together.
        </p>
        <div className="flex flex-col gap-2">
          <div className="text-pink-400 font-semibold">🌍 Community First</div>
          <div className="text-amber-400 font-semibold">🎵 Inspire & Be Inspired</div>
          <div className="text-emerald-400 font-semibold">🚀 Built By Producers, For Producers</div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
