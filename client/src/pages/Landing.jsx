import React from "react";
import { motion } from "framer-motion";

// Components
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import ProducerOfTheWeek from "../components/ProducerOfTheWeek";

// Assets
import sample1 from "../assets/sample/sample1.mp3";
import prodImage from "../assets/images/producer.jpg";
import writerImage from "../assets/images/artist.jpg";
import engineerImage from "../assets/images/engineer.jpg";
import sid from "../assets/images/dev.jpg";

// Icons
import {
  FaUsers,
  FaSearch,
  FaUserCircle,
  FaComments,
  FaTimesCircle,
  FaCheckCircle,
  FaTrophy,
  FaCircle,
} from "react-icons/fa";

const Landing = () => {
  const navLinks = [
    { href: "#what-is-loop-labs", label: "What is Collab Cloud" },
    { href: "#features", label: "Features" },
    { href: "/about", label: "About Us" },
    { href: "/community", label: "The Community" },
    { href: "/login", label: "Login" },
  ];

  const features = [
    {
      title: "The Community",
      description:
        "Reddit-style Community feed with built-in audio players, genre filters, and weekly challenges. Get feedback, share WIPs, and connect with creators who speak your language.",
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
      title: "Smart DMs",
      description:
        "Artist-focused chat with inline audio sharing, pinned project notes (BPM, key, deadlines), collab status tracking, and file version control. Everything organized.",
      icon: <FaComments size={36} className="text-pink-400 mb-4" />,
      highlights: ["Inline Audio Sharing", "Project Status Tracking", "File Version Control"]
    },
    {
      title: "Artist Profiles",
      description:
        "Showcase your top 5 tracks, display your skills and what you're looking for. Build trust with badges and achievements. One-click collab requests from any profile.",
      icon: <FaUserCircle size={36} className="text-purple-400 mb-4" />,
      highlights: ["Portfolio Showcase", "Achievement Badges", "Direct Collab Requests"]
    },
  ];

  // Using a map for dynamic Tailwind classes to avoid purging issues
  const roleStyles = {
    blue: "border-blue-500/20 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]",
    purple: "border-purple-500/20 hover:border-purple-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
    green: "border-green-500/20 hover:border-green-400/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]",
  };

  const whoCanUseRoles = [
    {
      title: "Producers & Beatmakers",
      description: "Share your productions, find vocalists for your tracks, collaborate on instrumentals, and get your music heard by the right artists. Connect with other producers to exchange ideas and elevate your craft.",
      image: prodImage,
      color: "blue",
      testimonial: "“I found a vocalist for my track in just two days on Collab Cloud.”"
    },
    {
      title: "Vocalists & Songwriters",
      description: "Find the perfect productions for your vocals, collaborate with producers worldwide, share your melodies, and transform your ideas into complete songs. Build lasting creative partnerships.",
      image: writerImage,
      color: "purple",
      testimonial: "“The smart DMs made finishing a song with a producer overseas seamless.”"
    },
    {
      title: "Musicians & Engineers",
      description: "Add live instrumentation to digital productions, mix and master collaborative projects, and connect with artists who need your technical expertise. Bring professional polish to every collaboration.",
      image: engineerImage,
      color: "green",
      testimonial: "“A great place to find new artists and lend my mixing skills.”"
    }
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
        title="Collab Cloud"
        subtitle="CREATE • CONNECT • COLLABORATE"
        description="The only platform built specifically for music collaboration. Find your perfect creative partner, build tracks together, and join a Community that gets it."
        primaryCTA={{ href: "/signup", label: "Start Collaborating" }}
        secondaryCTA={{ href: "#features", label: "See How It Works" }}
      />

      {/* What is Collab Cloud */}
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
            What is Collab Cloud?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
            <span className="text-blue-400 font-semibold">Collab Cloud</span> is the collaboration platform music creators have been waiting for.
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

          {/* Collab Cloud */}
          <div className="bg-white/5 backdrop-blur-sm border border-green-400/40 rounded-xl p-8 max-w-md w-full transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">
            <h4 className="text-green-400 font-bold mb-4 text-xl">
              Collab Cloud
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
              Core Features Of Collab Cloud
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Everything you need to discover, connect, collaborate, and create — no fluff, just what works.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center flex flex-col"
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
                <div className="text-left space-y-2 mt-auto pt-4 border-t border-white/10">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-blue-300">
                      <FaCircle className="mr-2 text-blue-400" size={6} />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who Can Use Collab Cloud */}
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
              Who Can Use Collab Cloud?
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Whether you're behind the boards, behind the mic, or behind the mix — there's a place for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whoCanUseRoles.map((role, index) => (
              <motion.div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col ${roleStyles[role.color]}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <img src={role.image} alt={role.title} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-white/20"/>
                  <h3 className="text-white text-2xl font-bold mb-3">{role.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {role.description}
                  </p>
                </div>
                <blockquote className="text-sm italic text-blue-300/80 mt-8 border-l-2 border-blue-400 pl-4 mt-auto">
                  {role.testimonial}
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works - Improved UI */}
      <motion.section
        className="relative z-10 py-20 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              From idea to finished track in 4 simple steps
            </p>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-white/10 rounded-full" aria-hidden="true">
                {/* The animated line */}
                <motion.div 
                    className="h-full bg-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{ transformOrigin: "left" }}
                    viewport={{ once: true, amount: 0.5 }}
                />
            </div>

            <div className="relative grid md:grid-cols-4 gap-x-8 gap-y-16">
              {[
                { step: "1", title: "Browse The Community", desc: "Discover tracks, join challenges, get feedback", icon: <FaUsers className="text-blue-400" /> },
                { step: "2", title: "Find Collabs", desc: "Get matched with perfect creative partners", icon: <FaSearch className="text-green-400" /> },
                { step: "3", title: "Connect & Chat", desc: "Organize your project with smart DMs", icon: <FaComments className="text-purple-400" /> },
                { step: "4", title: "Create Together", desc: "Track progress from idea to finished track", icon: <FaTrophy className="text-yellow-400" /> }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Circle and Icon */}
                  <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-[#0a0f1a] to-[#050505] border-2 border-blue-500/30 rounded-full flex items-center justify-center z-10 text-2xl">
                    {item.icon}
                  </div>
                  
                  {/* Mobile Connector */}
                  {index < 3 && <div className="md:hidden absolute top-16 left-1/2 w-1 h-16 bg-white/10 -translate-x-1/2" aria-hidden="true"></div>}
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-[#080808]">
                    {item.step}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
        <ProducerOfTheWeek
            audioUrl={sample1}
            genre="Trap"
            weekNumber={3}
            uploaderFullName="Siddhant" 
            uploader="@Prod_siddhant"
            uploaderImage={sid}
            trackTitle="Neon Dreams"
        />
      </motion.div>

      {/* Explore Button */}
      <motion.div
        className="text-center mt-12 mb-16"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <a
          href="/community"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-all duration-300"
        >
          Explore The Community
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
            Ready to Collab and make your next hit?
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of producers, vocalists, and mixers already collaborating on Collab Cloud.
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
              href="/community"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Browse The Community First
            </a>
          </div>
        </div>
      </motion.section>

      <Footer
        tagline="Collab Cloud | Create. Connect. Collaborate."
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
