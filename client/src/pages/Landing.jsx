import React from "react";
import { motion } from "framer-motion";

// Components
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import SampleOfDay from "../components/SampleOfDay";

// Assets
import sample1 from "../assets/sample/sample1.mp3";

// Icons
import {
  FaUsers,
  FaSearch,
  FaUserCircle,
  FaComments,
  FaTimesCircle,
  FaCheckCircle,
  FaTrophy,
  FaVolumeUp,
  FaBolt,
} from "react-icons/fa";

const Landing = () => {
  const navLinks = [
    { href: "#what-is-loop-labs", label: "What is Loop Labs" },
    { href: "#features", label: "Features" },
    { href: "/hub", label: "The Hub" },
    { href: "/about", label: "About Us" },
    { href: "/login", label: "Login" },
  ];

  const features = [
    {
      title: "The Hub",
      description:
        "Reddit-style community feed with built-in audio players, genre filters, and weekly challenges. Get feedback, share WIPs, and connect with creators who speak your language.",
      icon: <FaUsers size={36} className="text-blue-400 mb-4" />,
      highlights: ["Built-in Audio Player", "Weekly Genre Challenges", "Producer of the Week Badge"]
    },
    {
      title: "Find a Collab",
      description:
        "Smart matchmaking that connects producers, vocalists, and mixers based on genres and roles. Send requests with demos, get matched with your perfect creative partner.",
      icon: <FaSearch size={36} className="text-green-400 mb-4" />,
      highlights: ["Role-Based Matching", "Demo Attachments", "Instant Accept/Decline"]
    },
    {
      title: "Artist Profiles",
      description:
        "Showcase your top 5 tracks, display your skills and what you're looking for. Build trust with badges and achievements. One-click collab requests from any profile.",
      icon: <FaUserCircle size={36} className="text-purple-400 mb-4" />,
      highlights: ["Portfolio Showcase", "Achievement Badges", "Direct Collab Requests"]
    },
    {
      title: "Smart DMs",
      description:
        "Artist-focused chat with inline audio sharing, pinned project notes (BPM, key, deadlines), collab status tracking, and file version control. Everything organized.",
      icon: <FaComments size={36} className="text-pink-400 mb-4" />,
      highlights: ["Inline Audio Sharing", "Project Status Tracking", "File Version Control"]
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a]">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(37,99,235,0.12)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(29,78,216,0.09)_0%,_transparent_50%)]"></div>
      </div>

      <Header navLinks={navLinks} ctaText="Join Now" ctaHref="/signup" />

      {/* Hero Section */}
      <Hero
        title="Loop Labs"
        subtitle="CREATE • CONNECT • COLLABORATE"
        description="The only platform built specifically for music collaboration. Find your perfect creative partner, build tracks together, and join a community that gets it."
        primaryCTA={{ href: "/signup", label: "Start Collaborating" }}
        secondaryCTA={{ href: "#features", label: "See How It Works" }}
      />

      {/* What is Loop Labs */}
      <motion.section
        id="what-is-loop-labs"
        className="relative z-10 py-20 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            What is Loop Labs?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
            <span className="text-blue-400 font-semibold">Loop Labs</span> is the collaboration platform music creators have been waiting for. 
            No more scattered DMs, lost files, or dead-end forums. Everything you need to find collaborators, 
            manage projects, and create together — all in one place.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-6">
          {/* Other Platforms */}
          <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-xl p-8 max-w-md w-full transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]">
            <h4 className="text-red-400 font-bold mb-4 text-xl">
              Other Platforms
            </h4>
            <ul className="text-gray-400 text-left text-lg space-y-4">
              <li className="flex items-center">
                <FaTimesCircle className="mr-3 text-red-500" />
                Random DMs with No Context
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="mr-3 text-red-500" />
                No Project Management
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="mr-3 text-red-500" />
                Generic Social Features
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="mr-3 text-red-500" />
                File Chaos & Version Hell
              </li>
            </ul>
          </div>

          {/* Loop Labs */}
          <div className="bg-white/5 backdrop-blur-sm border border-green-400/40 rounded-xl p-8 max-w-md w-full transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">
            <h4 className="text-green-400 font-bold mb-4 text-xl">
              Loop Labs
            </h4>
            <ul className="text-green-200 text-left text-lg space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-400" />
                Smart Collab Matchmaking
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-400" />
                Built-in Project Tracking
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-400" />
                Music-First Design
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-400" />
                Organized File Management
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        id="features"
        className="relative z-10 py-28 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              4 Pillars of Collaboration
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Everything you need to discover, connect, collaborate, and create — no fluff, just what works.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.icon}
                <h3 className="text-white text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-blue-300">
                      <FaBolt className="mr-2 text-yellow-400" size={10} />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who Can Use Loop Labs */}
      <motion.section
        className="relative z-10 py-20 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Who Can Use Loop Labs?
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Whether you're behind the boards, behind the mic, or behind the mix — there's a place for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Producers & Beatmakers",
                description: "Share your beats, find vocalists for your tracks, collaborate on instrumentals, and get your productions heard by the right artists.",
                examples: ["Hip-Hop Producers", "Electronic Artists", "Lo-Fi Beatmakers", "Trap Producers"],
                icon: "🎹",
                color: "blue"
              },
              {
                title: "Vocalists & Songwriters", 
                description: "Find the perfect beats for your vocals, collaborate with producers worldwide, share your melodies, and turn your ideas into full songs.",
                examples: ["Singers", "Rappers", "Songwriters", "Toplining Artists"],
                icon: "🎤",
                color: "purple"
              },
              {
                title: "Musicians & Engineers",
                description: "Add live instruments to digital productions, mix and master collaborative projects, and connect with artists who need your expertise.",
                examples: ["Guitarists", "Mixing Engineers", "Mastering Engineers", "Multi-Instrumentalists"],
                icon: "🎸",
                color: "green"
              }
            ].map((role, index) => (
              <motion.div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-${role.color}-500/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-${role.color}-400/40 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{role.icon}</div>
                  <h3 className="text-white text-2xl font-bold mb-3">{role.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {role.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className={`text-${role.color}-400 font-semibold text-sm uppercase tracking-wide`}>
                    Perfect For:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {role.examples.map((example, idx) => (
                      <div key={idx} className="text-gray-400 text-sm bg-white/5 rounded-lg py-2 px-3 text-center">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-6">
              No matter your role in the music creation process, Loop Labs has the tools to help you connect and collaborate.
            </p>
            <a
              href="/signup"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              Find Your Creative Community
            </a>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="relative z-10 py-20 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 text-xl">
              From idea to finished track in 4 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Browse The Hub", desc: "Discover tracks, join challenges, get feedback", icon: <FaUsers className="text-blue-400" /> },
              { step: "2", title: "Find Collabs", desc: "Get matched with perfect creative partners", icon: <FaSearch className="text-green-400" /> },
              { step: "3", title: "Connect & Chat", desc: "Organize your project with smart DMs", icon: <FaComments className="text-purple-400" /> },
              { step: "4", title: "Create Together", desc: "Track progress from idea to finished track", icon: <FaTrophy className="text-yellow-400" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Producer of the Week */}
      <motion.div
        className="py-18 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-bold mb-2">
            <FaTrophy className="inline mr-3 text-yellow-400" />
            Producer of the Week
          </h2>
          <p className="text-gray-300">Winner of this week's Genre Challenge</p>
        </div>
        <SampleOfDay
          audioUrl={sample1}
          genre="Trap"
          bpm={140}
          keySignature="F#m"
          uploader="@Prod_siddhant"
        />
      </motion.div>

      {/* Explore Button */}
      <motion.div
        className="text-center mt-12"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <a
          href="/hub"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-all duration-300"
        >
          Explore The Hub
        </a>
      </motion.div>

      {/* Final CTA */}
      <motion.section
        className="relative z-10 py-28 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
            Ready to Find Your Creative Partner?
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of producers, vocalists, and mixers already collaborating on Loop Labs. 
            Your next hit starts with your next connection.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/signup"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-transform duration-300"
            >
              Start Collaborating Now
            </a>
            <a
              href="/hub"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Browse The Hub First
            </a>
          </div>
        </div>
      </motion.section>

      <Footer
        tagline="Loop Labs | Create. Connect. Collaborate."
        links={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
          { href: "/support", label: "Support" },
          { href: "/contact", label: "Contact" },
        ]}
      />
    </div>
  );
};

export default Landing;