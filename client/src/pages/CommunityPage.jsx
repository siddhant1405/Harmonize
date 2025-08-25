import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { 
  Search, 
  Plus, 
  MessageCircle, 
  Share2, 
  TrendingUp, 
  Clock, 
  Flame, 
  Play, 
  Pause, 
  ChevronUp,
  ChevronDown,
  MessageSquare,
  Users,
  HelpCircle,
  UserPlus,
  MessageSquarePlus
} from "lucide-react";

// Mock Data (Unchanged)
const genres = ["All", "Trap", "Lo-fi", "Future Bass", "Ambient", "R&B", "Hip-Hop"];
const flairs = ["All", "General", "Discussion", "Collab Request", "Feedback"];
const mockPosts = [
  { id: 1, user: { username: "BeatMaker2k24", avatar: "BM", isVerified: true }, title: "New Lo-fi beat I've been working on - thoughts?", content: "Been experimenting with some vinyl crackle and jazz samples.", genre: "Lo-fi", flair: "Feedback", hasAudio: true, audioTitle: "Midnight Cafe Vibes", upvotes: 156, comments: 23, timestamp: "2 hours ago" },
  { id: 2, user: { username: "TrapGod808", avatar: "TG", isVerified: false }, title: "How do you guys mix 808s to hit harder?", content: "Struggling with getting my 808s to punch through. Any tips?", genre: "Trap", flair: "Discussion", hasAudio: false, upvotes: 89, comments: 34, timestamp: "4 hours ago" },
  { id: 3, user: { username: "SynthWave_Producer", avatar: "SW", isVerified: true }, title: "Collaboration opportunity - looking for vocalist", content: "I've got this synthwave track that needs some dreamy vocals!", genre: "Future Bass", flair: "Collab Request", hasAudio: true, audioTitle: "Neon Dreams (Instrumental)", upvotes: 234, comments: 45, timestamp: "6 hours ago" },
  { id: 4, user: { username: "NewbieProducer", avatar: "NP", isVerified: false }, title: "My first ever beat, please be kind!", content: "Just started producing last week. Here's my first attempt at a trap beat.", genre: "Trap", flair: "Feedback", hasAudio: true, audioTitle: "First Steps", upvotes: 12, comments: 15, timestamp: "30 minutes ago" },
  { id: 5, user: { username: "AudioEngineer", avatar: "AE", isVerified: true }, title: "What's everyone's favorite compressor for drums?", content: "Looking to upgrade my mixing chain. What compressors do you swear by for punchy drums?", genre: "Hip-Hop", flair: "Discussion", hasAudio: false, upvotes: 67, comments: 28, timestamp: "1 hour ago" },
  { id: 6, user: { username: "LoFiVibes", avatar: "LV", isVerified: false }, title: "Welcome to the community!", content: "Just wanted to say hi to everyone here. Excited to share some beats and get feedback!", genre: "Lo-fi", flair: "General", hasAudio: false, upvotes: 23, comments: 8, timestamp: "3 hours ago" }
];


// Waveform Animation (Unchanged)
const Waveform = ({ isPlaying }) => (
  <div className="flex items-end justify-center h-12 gap-0.5">
    {[0.2, 0.8, 0.4, 0.9, 0.6, 0.3, 0.7, 0.5, 0.8, 0.2].map((h, i) => (
      <div
        key={i}
        className={`rounded-sm transition-all duration-300 ${isPlaying ? "bg-blue-400 animate-pulse" : "bg-gray-600"}`}
        style={{ height: `${h * 100}%`, width: "3px", animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

// Flair Component (Minor style adjustments for consistency)
const FlairBadge = ({ flair }) => {
  const getFlairStyles = (flair) => {
    switch (flair) {
      case "General": return "bg-gray-600/20 text-gray-200 border-gray-500/40";
      case "Discussion": return "bg-green-600/20 text-green-200 border-green-500/40";
      case "Collab Request": return "bg-purple-600/20 text-purple-200 border-purple-500/40";
      case "Feedback": return "bg-yellow-600/20 text-yellow-200 border-yellow-500/40";
      default: return "bg-blue-600/20 text-blue-200 border-blue-500/40";
    }
  };
  const getFlairIcon = (flair) => {
    switch (flair) {
      case "General": return <MessageSquare size={14} />;
      case "Discussion": return <HelpCircle size={14} />;
      case "Collab Request": return <UserPlus size={14} />;
      case "Feedback": return <MessageSquarePlus size={14} />;
      default: return null;
    }
  };
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold border backdrop-blur-sm ${getFlairStyles(flair)}`}>
      {getFlairIcon(flair)}
      {flair}
    </div>
  );
};

// Post Component (Enhanced with Landing Page styles)
const Post = ({ post }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userVote, setUserVote] = useState(null);
  const handleVote = (type) => setUserVote(userVote === type ? null : type);

  return (
    <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative flex gap-6">
        {/* Enhanced Voting Section */}
        <div className="flex flex-col items-center gap-2">
          <button onClick={() => handleVote("up")} className={`p-2.5 rounded-lg transition-all duration-300 ${userVote === "up" ? "text-blue-400 bg-blue-500/20" : "text-gray-400 hover:text-blue-400 hover:bg-white/10"}`}>
            <ChevronUp size={22} />
          </button>
          <span className="font-bold text-white text-lg">{post.upvotes}</span>
          <button onClick={() => handleVote("down")} className={`p-2.5 rounded-lg transition-all duration-300 ${userVote === "down" ? "text-red-400 bg-red-500/20" : "text-gray-400 hover:text-red-400 hover:bg-white/10"}`}>
            <ChevronDown size={22} />
          </button>
        </div>

        {/* Enhanced Post Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
               {post.user.avatar}
             </div>
             <div className="flex items-center gap-2 text-sm">
               <span className="font-semibold text-white hover:text-blue-400 cursor-pointer transition-colors">{post.user.username}</span>
               {post.user.isVerified && <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>}
               <span className="text-gray-500">•</span>
               <span className="text-gray-400">{post.timestamp}</span>
             </div>
           </div>
          
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
             <h3 className="text-xl font-bold text-white flex-1 leading-tight group-hover:text-blue-100 transition-colors">{post.title}</h3>
             <div className="flex gap-2 flex-shrink-0">
               <FlairBadge flair={post.flair} />
               <span className="bg-blue-600/20 text-blue-300 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-500/30">{post.genre}</span>
             </div>
           </div>
          
          <p className="text-gray-300 text-base mb-6 leading-relaxed">{post.content}</p>

          {post.hasAudio && (
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
              <div className="flex items-center gap-4">
                <button onClick={() => setIsPlaying(!isPlaying)} className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-600/25">
                  {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white ml-1" />}
                </button>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">{post.audioTitle}</h4>
                  <Waveform isPlaying={isPlaying} />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-6 text-sm">
            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group">
              <MessageCircle size={18} /> <span className="font-medium">{post.comments} Comments</span>
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group">
              <Share2 size={18} /> <span className="font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// Main Component
const CommunityPage = () => {
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedFlair, setSelectedFlair] = useState("All");
  const [sortBy, setSortBy] = useState("trending");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      let tempPosts = [...mockPosts];
      
      // Filter
      tempPosts = tempPosts.filter(
        (post) =>
          (selectedGenre === "All" || post.genre === selectedGenre) &&
          (selectedFlair === "All" || post.flair === selectedFlair) &&
          (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.content.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      // Sort
      switch (sortBy) {
        case "top": tempPosts.sort((a, b) => b.upvotes - a.upvotes); break;
        case "new": tempPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); break; // A more robust time sort
        default: tempPosts.sort((a, b) => (b.upvotes + b.comments) - (a.upvotes + a.comments)); break;
      }
      
      setFilteredPosts(tempPosts);
    }, 300); // Debounce filtering

    return () => clearTimeout(handler);
  }, [selectedGenre, selectedFlair, searchQuery, sortBy]);

  const navLinks = [
    { href: "/profile", label: "My Profile" },
    { href: "/messages", label: "Messages" },
  ];

  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a] min-h-screen text-white">
     <Header navLinks={navLinks} ctaText="Find Collabs" ctaHref="/collab" />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            The Harmonize Community
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where creators connect, share work, and find their next collaborator.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-12 shadow-2xl shadow-black/20">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-4">
            <div className="relative w-full md:w-auto md:flex-grow">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/20 text-white border border-white/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
                <button className="flex-grow md:flex-grow-0 bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 whitespace-nowrap transition-transform duration-300 shadow-lg shadow-blue-600/30">
                  <Plus size={20} /> Create Post
                </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-300">Sort By:</label>
               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-black/20 text-white border border-white/20 rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none">
                 <option value="trending">🔥 Trending</option>
                 <option value="top">📈 Top</option>
                 <option value="new">🕒 New</option>
               </select>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-300">Genre:</label>
              <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="bg-black/20 text-white border border-white/20 rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none">
                {genres.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-300">Flair:</label>
              <select value={selectedFlair} onChange={(e) => setSelectedFlair(e.target.value)} className="bg-black/20 text-white border border-white/20 rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none">
                {flairs.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Posts with Animation */}
        <motion.div layout className="space-y-6">
          <AnimatePresence>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  variants={postVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Post post={post} />
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-gray-400">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare size={40} className="opacity-50" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-200">No posts found</h3>
                <p className="text-lg">Try adjusting your filters or search terms.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer 
        tagline="Harmonize | Create. Connect. Collaborate." 
        links={[
          { href: "/privacy", label: "Privacy" }, 
          { href: "/terms", label: "Terms" },
          { href: "/support", label: "Support" },
          { href: "/contact", label: "Contact" }
        ]} 
      />
    </div>
  );
};

export default CommunityPage;
