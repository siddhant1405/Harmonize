import React from "react";
// Lucide-react icons for UI elements
import { Heart, Users, Edit, Settings } from "lucide-react";

// Component Imports
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcon from "../components/SocialIcon";
import GradientButton from "../components/GradientButton";

// Asset Imports
import profileImg from "../assets/images/producer.jpg";
import bannerImg from "../assets/images/bg.jpg";

// --- Enhanced Placeholder Data with "Skills" ---
const userProfile = {
  name: "Siddhant Gupta",
  username: "Prod_siddhant",
  title: "Producer & Developer",
  bio: "Creating the tools for the next generation of music. Founder of Harmonize. Passionate about blending technology with art. Currently exploring ambient and lo-fi soundscapes.",
  skills: ["Music Producer", "Writer", "Mixing Engineer", "Sound Designer"], 
  genres: ["Trap", "Lo-fi", "Future Bass", "Ambient", "R&B"],
  socials: {
    twitter: "https://twitter.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
  }
};

const uploadedSamples = [
  { id: 1, name: "Midnight Vibe", bpm: 90, key: "C#m",  tags: ["chill", "dark", "trap"] },
  { id: 2, name: "808 Knock", bpm: 140, key: "Fm", tags: ["808", "hard", "drill"] },
  { id: 3, name: "Sunset Rhodes", bpm: 85, key: "Am", tags: ["lofi", "keys", "warm"] },
  { id: 4, name: "Drill UK", bpm: 145, key: "Gm",  tags: ["drill", "uk", "aggressive"] },
  { id: 5, name: "Ambient Pad", bpm: 70, key: "Gmaj", tags: ["pad", "warm", "cinematic"] },
];

const highlightedSamples = uploadedSamples.slice(0, 5);

// Reusable Sample Card Component
const SampleCard = ({ sample, isOwnSample }) => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-1">
        <div>
            <h4 className="text-white font-bold text-lg truncate">{sample.name}</h4>
            <div className="w-full h-16 bg-black/20 my-3 rounded-md flex items-center justify-center">
                <p className="text-gray-500 text-xs">Waveform Placeholder</p>
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
                {sample.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full">#{tag}</span>
                ))}
            </div>
        </div>
        <div className="flex justify-between items-center text-xs text-gray-300 pt-2 border-t border-white/10">
            <span>{sample.bpm} BPM</span>
            <span>{sample.key}</span>
            <div className="flex items-center gap-3">
                {isOwnSample && <button className="text-gray-400 hover:text-white"><Edit size={12}/></button>}
            </div>
        </div>
    </div>
);

const ProfilePage = () => {
  const navLinks = [{ href: "/samples", label: "Messages" }, { href: "/community", label: "Community" }];
  
  // --- VARIABLE RENAMED FOR CLARITY ---
  // This flag controls the button logic. `true` for "Edit", `false` for "Collab".
  const isViewingOwnProfile = true; 

  return (
 <div className="relative w-full overflow-hidden font-sans bg-black min-h-screen text-white">
      <Header navLinks={navLinks} ctaText="Log Out" ctaHref="/" />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="mb-12">
          <div className="h-48 md:h-64 bg-gray-700 rounded-t-2xl bg-cover bg-center" style={{ backgroundImage: `url(${bannerImg})` }}></div>
          <div className="bg-white/5 backdrop-blur-sm border-x border-b border-white/10 p-6 rounded-b-2xl">
            <div className="flex flex-col sm:flex-row">
              <div className="-mt-24 sm:-mt-28 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#080808] overflow-hidden flex-shrink-0">
                <img src={profileImg} alt={userProfile.name} className="w-full h-full object-cover" />
              </div>
              <div className="sm:ml-6 mt-4 sm:mt-0 flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                    <p className="text-gray-400">@{userProfile.username}</p>
                    <p className="text-blue-400 font-semibold mt-1">{userProfile.title}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {isViewingOwnProfile ? (
                      <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all">
                        <Settings size={16} /> Edit Profile
                      </button>
                    ) : (
                      <GradientButton type="button" icon={<Users size={16} />}>
                        Send Collab Request
                      </GradientButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content (2-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column (Sidebar) */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-blue-300">About</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{userProfile.bio}</p>
              
              {/* --- "Skills" Section --- */}
              <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                      {userProfile.skills.map(skill => (
                          <span key={skill} className="bg-teal-900/50 text-teal-300 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                      ))}
                  </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-semibold text-gray-300 mb-3">Connect</h4>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(userProfile.socials).map(([key, link]) => (
                    <a key={key} href={link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" title={key.charAt(0).toUpperCase() + key.slice(1)}>
                      <SocialIcon name={key} className="w-4 h-4 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-2xl mb-6 text-blue-300 border-b border-white/10 pb-4">Spotlight</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {highlightedSamples.map(sample => <SampleCard key={sample.id} sample={sample} isOwnSample={isViewingOwnProfile} />)}
              </div>
              {highlightedSamples.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">No spotlight tracks yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
