import React from "react";
// Lucide-react icons for UI elements
import { Heart, Users, Edit, Settings } from "lucide-react";

// Component Imports
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcon from "../components/SocialIcon"; // Using the reusable icon component
import GradientButton from "../components/GradientButton"; // Importing your custom button

// Asset Imports (using placeholders, replace with actual imports)
import profileImg from "../assets/images/producer.jpg";
import bannerImg from "../assets/images/bg.jpg";

// --- Enhanced Placeholder Data ---
const userProfile = {
  name: "Siddhant Gupta",
  username: "Prod_siddhant",
  title: "Producer & Developer",
  bio: "Creating the tools for the next generation of music. Founder of Harmonize. Passionate about blending technology with art. Currently exploring ambient and lo-fi soundscapes.",
  roles: ["Music Producer", "Writer",], // <-- New roles data
  genres: ["Trap", "Lo-fi", "Future Bass", "Ambient", "R&B"],
  socials: {
    twitter: "https://twitter.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
  }
};

const uploadedSamples = [
  { id: 1, name: "Midnight Vibe", bpm: 90, key: "C#m", likes: 1240, tags: ["chill", "dark", "trap"] },
  { id: 2, name: "808 Knock", bpm: 140, key: "Fm", likes: 890, tags: ["808", "hard", "drill"] },
  { id: 3, name: "Sunset Rhodes", bpm: 85, key: "Am", likes: 2100, tags: ["lofi", "keys", "warm"] },
  { id: 4, name: "Drill UK", bpm: 145, key: "Gm", likes: 756, tags: ["drill", "uk", "aggressive"] },
  { id: 5, name: "Ambient Pad", bpm: 70, key: "Gmaj", likes: 1800, tags: ["pad", "warm", "cinematic"] },
];

const highlightedSamples = uploadedSamples.slice(0, 5);

// Reusable Sample Card Component (No changes needed)
const SampleCard = ({ sample, isOwnSample }) => (
    <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-1">
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
        <div className="flex justify-between items-center text-xs text-gray-300 pt-2 border-t border-blue-500/20">
            <span>{sample.bpm} BPM</span>
            <span>{sample.key}</span>
            <div className="flex items-center gap-3">
                <button className="text-pink-400 hover:text-pink-300 flex items-center gap-1"><Heart size={12}/> {sample.likes}</button>
                {isOwnSample && <button className="text-gray-400 hover:text-white"><Edit size={12}/></button>}
            </div>
        </div>
    </div>
);

const ProfilePage = () => {
  const navLinks = [{ href: "/samples", label: "Messages" }, { href: "/community", label: "Community" }];
  
  // Set to `false` to see the "Send Collab Request" GradientButton in action
  const isOwnProfile = false; 

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a] min-h-screen text-white">
      <Header navLinks={navLinks} ctaText="Log Out" ctaHref="/" />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="mb-12">
          <div className="h-48 md:h-64 bg-gray-700 rounded-t-2xl bg-cover bg-center" style={{ backgroundImage: `url(${bannerImg})` }}></div>
          <div className="bg-white/5 backdrop-blur-sm border-x border-b border-blue-500/20 p-6 rounded-b-2xl">
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
                  
                  {/* --- UPDATED ACTION BUTTONS --- */}
                  <div className="flex items-center gap-3">
                    {isOwnProfile ? (
                      <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all">
                        <Settings size={16} /> Edit Profile
                      </button>
                    ) : (
                      // Use GradientButton when it's not the user's own profile
                      <GradientButton 
                        type="button" 
                        icon={<Users size={16} />}
                      >
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
            {/* --- UPDATED ABOUT CARD --- */}
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-blue-300">About</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{userProfile.bio}</p>
              
              {/* New "Roles" Section */}
              <div className="mb-4">
                  <h4 className="font-semibold text-gray-300 mb-3">Roles</h4>
                  <div className="flex flex-wrap gap-2">
                      {userProfile.roles.map(role => (
                          <span key={role} className="bg-teal-900/50 text-teal-300 text-sm font-medium px-3 py-1 rounded-full">{role}</span>
                      ))}
                  </div>
              </div>
              
              {/* Social Links Section */}
              <div className="pt-4 border-t border-blue-500/20">
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
            
            {/* Genres Card (No changes needed) */}
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-blue-300">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {userProfile.genres.map(genre => (
                  <span key={genre} className="bg-blue-900/50 text-blue-300 text-sm font-medium px-3 py-1 rounded-full">{genre}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Creations Feed) - No changes needed */}
          <div className="md:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 p-6 rounded-2xl">
              <h3 className="font-bold text-2xl mb-6 text-blue-300 border-b border-blue-500/20 pb-4">Spotlight</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {highlightedSamples.map(sample => <SampleCard key={sample.id} sample={sample} isOwnSample={isOwnProfile} />)}
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

      <Footer
        tagline="Harmonize — Built for creators, by creators."
        links={[{ href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }]}
      />
    </div>
  );
};

export default ProfilePage;
