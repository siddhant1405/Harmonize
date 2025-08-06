import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component Imports
import Header from "../components/Header";
import Footer from "../components/Footer";

// Icon Imports
import { FaMusic, FaHeart, FaUserFriends, FaRegClock, FaCog, FaPlus } from "react-icons/fa";

import profileimg from "../assets/images/img2.jpg";
import banner from "../assets/images/bg.jpg";

// --- Placeholder Data (replace with API data later) ---
const userProfile = {
  name: "Siddhant Gupta",
  username: "Prod_siddhant",
  title: "Producer & Developer",
  bio: "Creating the tools for the next generation of music. Founder of Loop Labs. Passionate about blending technology with art. Currently exploring ambient and lo-fi soundscapes.",
  genres: ["Trap", "Lo-fi", "Future Bass", "Ambient", "R&B"],
  stats: {
    followers: "1.2k",
    following: "150",
    samples: "48",
  },
};

const uploadedSamples = [
  { id: 1, name: "Midnight Vibe", bpm: 90, key: "C#m" },
  { id: 2, name: "808 Knock", bpm: 140, key: "Fm" },
  { id: 3, name: "Sunset Rhodes", bpm: 85, key: "Am" },
  { id: 4, name: "Drill UK", bpm: 145, key: "Gm" },
];

const likedSamples = [
  { id: 5, name: "Future Wobble", bpm: 128, key: "G#m", uploader: "SkrillexFan" },
  { id: 6, name: "Lo-fi Rain", bpm: 75, key: "Dm", uploader: "ChillBeats" },
];
// --- End Placeholder Data ---


// Reusable Sample Card Component
const SampleCard = ({ sample }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-1">
    <div>
      <h4 className="text-white font-bold text-lg">{sample.name}</h4>
      {sample.uploader && <p className="text-xs text-gray-400 mb-2">by @{sample.uploader}</p>}
      <div className="w-full h-16 bg-black/20 my-3 rounded-md flex items-center justify-center">
        <p className="text-gray-500 text-xs">Waveform Placeholder</p>
      </div>
    </div>
    <div className="flex justify-between items-center text-xs text-gray-300">
      <span>{sample.bpm} BPM</span>
      <span>{sample.key}</span>
      <button className="text-pink-400 hover:text-pink-300"><FaHeart /></button>
    </div>
  </div>
);


const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("uploaded");

  const navLinks = [
    { href: "/samples", label: "Sample Library" },
    { href: "/community", label: "Connect with community" },
  ];

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a] min-h-screen text-white">
      <Header navLinks={navLinks} ctaText="Log Out" ctaHref="/" />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* --- Profile Header --- */}
        <div className="mb-12">
          {/* Cover Image */}
          <div className="h-48 md:h-64 bg-gray-700 rounded-t-2xl bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}></div>
          
          {/* Profile Details & Actions */}
          <div className="bg-white/5 backdrop-blur-sm border-x border-b border-blue-500/20 p-6 rounded-b-2xl">
            <div className="flex flex-col sm:flex-row">
              {/* Avatar */}
              <div className="-mt-24 sm:-mt-28 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#080808] overflow-hidden flex-shrink-0">
                <img src={profileimg} alt={userProfile.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="sm:ml-6 mt-4 sm:mt-0 flex-grow">
                {/* Name & Username */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                    <p className="text-gray-400">@{userProfile.username}</p>
                  </div>
                  <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all">
                    <FaCog /> Edit Profile
                  </button>
                </div>
                
                {/* Stats */}
                <div className="flex gap-6 mt-4">
                  <div><span className="font-bold">{userProfile.stats.followers}</span> <span className="text-gray-400">Followers</span></div>
                  <div><span className="font-bold">{userProfile.stats.following}</span> <span className="text-gray-400">Following</span></div>
                  <div><span className="font-bold">{userProfile.stats.samples}</span> <span className="text-gray-400">Samples</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Main Content (2-column layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column (Sidebar) */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-blue-300">Bio</h3>
              <p className="text-gray-300 leading-relaxed">{userProfile.bio}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-blue-300">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {userProfile.genres.map(genre => (
                  <span key={genre} className="bg-blue-900/50 text-blue-300 text-sm font-medium px-3 py-1 rounded-full">{genre}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Creations Feed) */}
          <div className="md:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 p-6 rounded-2xl">
              {/* Tabs */}
              <div className="flex border-b border-blue-500/20 mb-6">
                <button
                  onClick={() => setActiveTab("uploaded")}
                  className={`py-2 px-4 font-semibold transition-all ${activeTab === 'uploaded' ? 'text-white border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
                >
                  Uploaded Samples
                </button>
                <button
                  onClick={() => setActiveTab("liked")}
                  className={`py-2 px-4 font-semibold transition-all ${activeTab === 'liked' ? 'text-white border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
                >
                  Liked Samples
                </button>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeTab === 'uploaded' && uploadedSamples.map(sample => <SampleCard key={sample.id} sample={sample} />)}
                {activeTab === 'liked' && likedSamples.map(sample => <SampleCard key={sample.id} sample={sample} />)}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer
        tagline="Loop Labs — Built for creators, by creators."
        links={[{ href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }]}
      />
    </div>
  );
};

export default ProfilePage;
