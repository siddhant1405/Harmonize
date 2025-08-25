import React from "react";

const mockSamples = [
  {
    name: "Midnight Groove",
    artist: "@bassflow",
    genre: "Lo-fi"
  },
  {
    name: "Starlight Percs",
    artist: "@melodize",
    genre: "Trap"
  },
  {
    name: "Uplifted Plucks",
    artist: "@synthrider",
    genre: "House"
  },
];

const SampleLibrary = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#151515] via-[#0B1020] to-[#08080D]">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">Sample Library</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {mockSamples.map((sample, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
            >
              {/* Replace with actual waveform image when available */}
              <div className="bg-emerald-400/10 text-emerald-300 py-2 rounded mb-4">
                {sample.genre}
              </div>
              <h2 className="text-xl font-semibold text-white mb-1">{sample.name}</h2>
              <div className="text-gray-400 mb-4">{sample.artist}</div>
              <button className="bg-gradient-to-r from-amber-400 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
                ▶ Listen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleLibrary;
 