import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Music, Heart, Users, Edit, Search, Plus, Share2, Download as DownloadIcon, Settings } from "lucide-react";

// Component Imports
import Header from "../components/Header";
import Footer from "../components/Footer";

// Asset Imports (using placeholders, replace with actual imports)
import profileImg from "../assets/images/producer.jpg";
import bannerImg from "../assets/images/bg.jpg";

// --- Enhanced Placeholder Data ---
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
  socials: {
    twitter: "https://twitter.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
  }
};

const uploadedSamples = [
  { id: 1, name: "Midnight Vibe", bpm: 90, key: "C#m", plays: 1240, likes: 89, downloads: 156, tags: ["chill", "dark", "trap"] },
  { id: 2, name: "808 Knock", bpm: 140, key: "Fm", plays: 890, likes: 67, downloads: 123, tags: ["808", "hard", "drill"] },
  { id: 3, name: "Sunset Rhodes", bpm: 85, key: "Am", plays: 2100, likes: 134, downloads: 201, tags: ["lofi", "keys", "warm"] },
  { id: 4, name: "Drill UK", bpm: 145, key: "Gm", plays: 756, likes: 45, downloads: 89, tags: ["drill", "uk", "aggressive"] },
];

const likedSamples = [
  { id: 5, name: "Future Wobble", bpm: 128, key: "G#m", uploader: "SkrillexFan", plays: 3400, likes: 289, downloads: 412, tags: ["future bass", "wobble"] },
  { id: 6, name: "Lo-fi Rain", bpm: 75, key: "Dm", uploader: "ChillBeats", plays: 5600, likes: 445, downloads: 678, tags: ["lofi", "rain", "ambient"] },
];
// --- End Placeholder Data ---


// --- Social Icon SVGs ---
const socialIcons = {
  twitter: (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
      <title>Twitter</title>
      <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.92 3.57-.7-.02-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.35 0-.69-.02-1.03-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.21 0-.42-.02-.63.84-.6 1.56-1.36 2.15-2.23z"/>
    </svg>
  ),
  instagram: (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
      <title>Instagram</title>
      <path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.297-1.459.717-2.126 1.384S.926 3.356.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.297.784.717 1.459 1.384 2.126.667.666 1.342 1.089 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.784-.297 1.459-.718 2.126-1.384.666-.667 1.089-1.342 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.297-.784-.718-1.459-1.384-2.126C21.314 1.67 20.641 1.25 19.857.953 19.092.656 18.223.453 16.947.393 15.667.333 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.381-.42.419-.82.679-1.38.896-.423.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-1.381-.896-.164-.423-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.06-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.381.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.175 8.797 2.16 12 2.16zm0 5.48c-2.42 0-4.36 1.94-4.36 4.36s1.94 4.36 4.36 4.36 4.36-1.94 4.36-4.36-1.94-4.36-4.36-4.36zm0 7.28c-1.6 0-2.92-1.32-2.92-2.92s1.32-2.92 2.92-2.92 2.92 1.32 2.92 2.92-1.32 2.92-2.92 2.92zm6.43-7.61c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/>
    </svg>
  ),
  soundcloud: (
     <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
      <title>SoundCloud</title>
      <path fill="currentColor" d="M3.75 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5H3.75zM6 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5H6zm2.25 0a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75zM10.5 12a.75.75 0 0 0 0 1.5H12v6a3 3 0 0 1-3 3H7.5a3 3 0 0 1-3-3v-5.25a.75.75 0 0 0-1.5 0V15a4.5 4.5 0 0 0 4.5 4.5H9a4.5 4.5 0 0 0 4.5-4.5V12h-.75a.75.75 0 0 0-.75.75v.001a.75.75 0 0 0 .75.749H12a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5zm1.5-1.5a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75zM15 10.5a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5H15zm2.25 0a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75zM19.5 10.5a.75.75 0 0 0 0 1.5h1.5v3A3.75 3.75 0 0 1 17.25 18H15a.75.75 0 0 0 0 1.5h2.25a5.25 5.25 0 0 0 5.25-5.25v-3H21a.75.75 0 0 0 0-1.5h-1.5z"/>
    </svg>
  ),
  spotify: (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
      <title>Spotify</title>
      <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.922 17.466c-.234.37-.698.494-1.068.26l-3.286-2.02c-.37-.234-.494-.698-.26-1.068.234-.37.698-.494 1.068-.26l3.286 2.02c.37.234.494.698.26 1.068zm1.04-2.338c-.28.455-.87.61-1.325.33l-3.85-2.37c-.454-.28-.608-.87-.33-1.324.28-.454.87-.608 1.325-.33l3.85 2.37c.454.28.608.87.33 1.324zm.143-2.548c-.347.558-1.06.742-1.618.395L9.67 8.573c-.558-.347-.742-1.06-.395-1.618.347-.558 1.06-.742 1.618-.395l6.845 4.232c.558.347.742 1.06.395 1.618z"/>
    </svg>
  ),
  beatstars: (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
      <title>BeatStars</title>
      <path fill="currentColor" d="M12 0l-12 12 12 12 12-12L12 0zm0 19.2l-7.2-7.2L12 4.8l7.2 7.2L12 19.2z"/>
    </svg>
  )
};
// --- End Social Icon SVGs ---


// Reusable Sample Card Component
const SampleCard = ({ sample, isOwnSample }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-1">
    <div>
      <h4 className="text-white font-bold text-lg truncate">{sample.name}</h4>
      {sample.uploader && <p className="text-xs text-gray-400 mb-2">by @{sample.uploader}</p>}
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
  const [activeTab, setActiveTab] = useState("uploaded");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const getFilteredSamples = () => {
    const source = activeTab === 'uploaded' ? uploadedSamples : likedSamples;
    let filtered = source.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

    switch(sortBy) {
        case 'popular':
            return filtered.sort((a,b) => b.plays - a.plays);
        case 'liked':
            return filtered.sort((a,b) => b.likes - a.likes);
        default: // 'recent'
            return filtered;
    }
  }

  const navLinks = [{ href: "/samples", label: "Sample Library" }, { href: "/community", label: "Community" }];

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a] min-h-screen text-white">
       {/* Background Glows */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(37,99,235,0.12)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(29,78,216,0.09)_0%,_transparent_50%)]"></div>
      </div>

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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                    <p className="text-gray-400">@{userProfile.username}</p>
                    <p className="text-blue-400 font-semibold mt-1">{userProfile.title}</p>
                  </div>
                  <button className="bg-white/10 hover:bg-white/20 px-4 py-2 mt-4 sm:mt-0 rounded-lg font-semibold flex items-center gap-2 transition-all">
                    <Settings size={16} /> Edit Profile
                  </button>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <div><span className="font-bold">{userProfile.stats.followers}</span> <span className="text-gray-400">Followers</span></div>
                  <div><span className="font-bold">{userProfile.stats.following}</span> <span className="text-gray-400">Following</span></div>
                  <div><span className="font-bold">{userProfile.stats.samples}</span> <span className="text-gray-400">Samples</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content (2-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column (Sidebar) */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-blue-300">About</h3>
              <p className="text-gray-300 leading-relaxed">{userProfile.bio}</p>
               {/* Social Links */}
                <div className="mt-4 pt-4 border-t border-blue-500/20">
                    <h4 className="font-semibold text-gray-300 mb-3">Connect</h4>
                    <div className="flex flex-wrap gap-3">
                        {Object.entries(userProfile.socials).map(([key, link]) => (
                            <a key={key} href={link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" title={key.charAt(0).toUpperCase() + key.slice(1)}>
                                {socialIcons[key]}
                            </a>
                        ))}
                    </div>
                </div>
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
              {/* Tabs & Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center border-b border-blue-500/20 mb-6 pb-4 gap-4">
                <div className="flex">
                  <button onClick={() => setActiveTab("uploaded")} className={`py-2 px-4 font-semibold transition-all ${activeTab === 'uploaded' ? 'text-white border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}>My Samples</button>
                  <button onClick={() => setActiveTab("liked")} className={`py-2 px-4 font-semibold transition-all ${activeTab === 'liked' ? 'text-white border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}>Liked</button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-black/20 w-36 sm:w-48 text-white border border-blue-500/20 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"/>
                    </div>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="bg-black/20 text-white border border-blue-500/20 rounded-lg py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400">
                        <option value="recent">Recent</option>
                        <option value="popular">Popular</option>
                        <option value="liked">Most Liked</option>
                    </select>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {getFilteredSamples().map(sample => <SampleCard key={sample.id} sample={sample} isOwnSample={activeTab === 'uploaded'} />)}
              </div>
              {getFilteredSamples().length === 0 && (
                  <div className="col-span-full text-center py-12">
                      <p className="text-gray-400">No samples found.</p>
                  </div>
              )}
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
