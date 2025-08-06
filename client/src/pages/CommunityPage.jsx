import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  Users,
  Hash,
  MessageSquare
} from "lucide-react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Mock Data
const genres = ["All", "Trap", "Lo-fi", "Future Bass", "Ambient", "R&B", "Hip-Hop"];
const mockPosts = [
  { id: 1, user: { username: "BeatMaker2k24", avatar: "BM", isVerified: true }, title: "New Lo-fi beat I've been working on - thoughts?", content: "Been experimenting with some vinyl crackle and jazz samples.", genre: "Lo-fi", hasAudio: true, audioTitle: "Midnight Cafe Vibes", upvotes: 156, comments: 23, timestamp: "2 hours ago" },
  { id: 2, user: { username: "TrapGod808", avatar: "TG", isVerified: false }, title: "How do you guys mix 808s to hit harder?", content: "Struggling with getting my 808s to punch through. Any tips?", genre: "Trap", hasAudio: false, upvotes: 89, comments: 34, timestamp: "4 hours ago" },
  { id: 3, user: { username: "SynthWave_Producer", avatar: "SW", isVerified: true }, title: "Collaboration opportunity - looking for vocalist", content: "I've got this synthwave track that needs some dreamy vocals!", genre: "Future Bass", hasAudio: true, audioTitle: "Neon Dreams (Instrumental)", upvotes: 234, comments: 45, timestamp: "6 hours ago" },
  { id: 4, user: { username: "NewbieProducer", avatar: "NP", isVerified: false }, title: "My first ever beat, please be kind!", content: "Just started producing last week. Here's my first attempt at a trap beat.", genre: "Trap", hasAudio: true, audioTitle: "First Steps", upvotes: 12, comments: 15, timestamp: "30 minutes ago" }
];

const mockChatRooms = [
  { id: 1, name: "Trap Central", genre: "Trap", memberCount: 156, isLive: true, description: "Where the 808s hit hardest", recentActivity: "2 minutes ago" },
  { id: 2, name: "Lo-fi Lounge", genre: "Lo-fi", memberCount: 89, isLive: true, description: "Chill vibes and smooth beats", recentActivity: "5 minutes ago" },
  { id: 3, name: "Future Bass HQ", genre: "Future Bass", memberCount: 234, isLive: true, description: "Melodic drops and synth magic", recentActivity: "1 minute ago" },
  { id: 4, name: "Ambient Spaces", genre: "Ambient", memberCount: 67, isLive: false, description: "Atmospheric soundscapes", recentActivity: "15 minutes ago" },
  { id: 5, name: "R&B Sessions", genre: "R&B", memberCount: 123, isLive: true, description: "Smooth grooves and soulful melodies", recentActivity: "3 minutes ago" },
  { id: 6, name: "Hip-Hop Lab", genre: "Hip-Hop", memberCount: 198, isLive: true, description: "Bars, beats, and everything in between", recentActivity: "30 seconds ago" }
];

// Waveform Animation
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

// Post Component
const Post = ({ post }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userVote, setUserVote] = useState(null);

  const handleVote = (type) => setUserVote(userVote === type ? null : type);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-blue-400/40">
      <div className="flex gap-6">
        {/* Voting */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => handleVote("up")}
            className={`p-2 rounded-lg ${userVote === "up" ? "text-blue-400" : "text-gray-400 hover:text-blue-400"}`}
          >
            <ChevronUp size={20} />
          </button>
          <span className="font-bold text-white text-lg">{post.upvotes}</span>
          <button
            onClick={() => handleVote("down")}
            className={`p-2 rounded-lg ${userVote === "down" ? "text-red-400" : "text-gray-400 hover:text-red-400"}`}
          >
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Post Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <div className="w-7 h-7 bg-blue-900 rounded-full flex items-center justify-center font-bold text-blue-300">
              {post.user.avatar}
            </div>
            <span className="font-semibold text-white">{post.user.username}</span>
            {post.user.isVerified && <span className="text-blue-400">✓</span>}
            <span>• {post.timestamp}</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
          <p className="text-gray-300 mb-4">{post.content}</p>

          {/* Audio Player */}
          {post.hasAudio && (
            <div className="bg-black/20 rounded-lg p-4 mb-4 border border-blue-500/20">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <div className="flex-1">
                  <Waveform isPlaying={isPlaying} />
                </div>
              </div>
            </div>
          )}

          {/* Post Actions */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <button className="flex items-center gap-2 hover:text-white">
              <MessageCircle size={16} /> {post.comments} Comments
            </button>
            <button className="flex items-center gap-2 hover:text-white">
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Chat Room Component
const ChatRoom = ({ room }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 transition-all duration-300 hover:border-blue-400/40 cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Hash size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
              {room.name}
            </h3>
            <p className="text-sm text-gray-400">{room.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {room.isLive && (
            <div className="flex items-center gap-1 bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-semibold">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              LIVE
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{room.memberCount} members</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{room.recentActivity}</span>
          </div>
        </div>
        <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
          {room.genre}
        </span>
      </div>
    </div>
  );
};

// Main Component
const CommunityPage = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [chatRooms, setChatRooms] = useState(mockChatRooms);
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);
  const [filteredChatRooms, setFilteredChatRooms] = useState(mockChatRooms);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("trending");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeView, setActiveView] = useState("posts");

  useEffect(() => {
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      // Filter Posts
      let tempPosts = [...posts];
      tempPosts = tempPosts.filter(
        (post) =>
          (selectedGenre === "All" || post.genre === selectedGenre) &&
          (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      // Sort Posts
      switch (sortBy) {
        case "top":
          tempPosts.sort((a, b) => b.upvotes - a.upvotes);
          break;
        case "new":
          tempPosts.sort((a, b) => b.id - a.id);
          break;
        default:
          tempPosts.sort((a, b) => (b.upvotes + b.comments) - (a.upvotes + a.comments));
          break;
      }

      // Filter Chat Rooms
      let tempChatRooms = [...chatRooms];
      tempChatRooms = tempChatRooms.filter(
        (room) =>
          (selectedGenre === "All" || room.genre === selectedGenre) &&
          (room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            room.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      // Sort Chat Rooms (by activity/members)
      switch (sortBy) {
        case "top":
          tempChatRooms.sort((a, b) => b.memberCount - a.memberCount);
          break;
        case "new":
          tempChatRooms.sort((a, b) => a.id - b.id);
          break;
        default:
          // Sort by live status first, then by recent activity
          tempChatRooms.sort((a, b) => {
            if (a.isLive && !b.isLive) return -1;
            if (!a.isLive && b.isLive) return 1;
            return b.memberCount - a.memberCount;
          });
          break;
      }

      setFilteredPosts(tempPosts);
      setFilteredChatRooms(tempChatRooms);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [posts, chatRooms, selectedGenre, searchQuery, sortBy]);

  const SortButton = ({ value, label, icon: Icon }) => (
    <button
      onClick={() => setSortBy(value)}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
        sortBy === value ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-white/10"
      }`}
    >
      <Icon size={16} /> {label}
    </button>
  );

  const ViewToggle = ({ value, label, icon: Icon }) => (
    <button
      onClick={() => setActiveView(value)}
      className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all ${
        activeView === value 
          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
          : "text-gray-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon size={18} /> {label}
    </button>
  );

  const navLinks = [
    { href: "/samples", label: "Sample Library" },
    { href: "/profile", label: "Profile" }
  ];

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a] min-h-screen text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(37,99,235,0.12)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(29,78,216,0.09)_0%,_transparent_50%)]"></div>
      </div>

      <Header navLinks={navLinks} ctaText="Log Out" ctaHref="/" />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">Community Hub</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
            Share your work, get feedback, and connect with fellow creators.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-2 flex gap-2">
            <ViewToggle value="posts" label="Posts" icon={MessageSquare} />
            <ViewToggle value="chat" label="Live Chat Rooms" icon={MessageCircle} />
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 mb-8 flex flex-wrap items-center gap-4 justify-between">
          <div className="relative w-full sm:w-60 md:w-64">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeView === 'posts' ? 'posts' : 'chat rooms'}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/20 text-white border border-blue-500/20 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-2 p-1 bg-black/20 rounded-xl">
            <SortButton value="trending" label="Trending" icon={Flame} />
            <SortButton value="top" label="Top" icon={TrendingUp} />
            <SortButton value="new" label="New" icon={Clock} />
          </div>

          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="bg-black/20 text-white border border-blue-500/20 rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-400"
          >
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>

          <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 whitespace-nowrap">
            <Plus size={18} /> 
            {activeView === 'posts' ? 'Add Post' : 'Create Room'}
          </button>
        </div>

        {/* Content with Animation */}
        <div
          className={`space-y-6 transform transition-all duration-300 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {activeView === 'posts' ? (
            filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Post key={post.id} post={post} />
              ))
            ) : (
              <div className="text-center py-12 text-gray-400">
                <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                <p>No posts found matching your criteria.</p>
              </div>
            )
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredChatRooms.length > 0 ? (
                filteredChatRooms.map((room) => (
                  <ChatRoom key={room.id} room={room} />
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-gray-400">
                  <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No chat rooms found matching your criteria.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer tagline="Loop Labs — Built for creators, by creators." links={[{ href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }]} />
    </div>
  );
};

export default CommunityPage;
