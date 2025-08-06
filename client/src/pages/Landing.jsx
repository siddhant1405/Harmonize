import React from "react";
import { motion } from "framer-motion";

// Component Imports
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import SampleOfDay from "../components/SampleOfDay";

// Asset Imports
import sample1 from "../assets/sample/sample1.mp3";

// Icon Imports
import { FaTimesCircle, FaCheckCircle, FaSlidersH, FaMicrophoneAlt, FaMusic } from "react-icons/fa";

const Landing = () => {
  const navLinks = [
    { href: "#what-is-loop-labs", label: "What is Loop Labs" },
    { href: "#features", label: "Features" },
    { href: "/samples", label: "Sample Library" },
    { href: "/about", label: "About Us" },
    { href: "/login", label: "Login" },
  ];

  const features = [
    { title: "Vast Sample Library", description: "Access a constantly growing library of high-quality, community-sourced loops and samples for any style." },
    { title: "A Thriving Community Hub", description: "Share posts, get meaningful feedback, and build relationships in a lively, music-focused forum." },
    { title: "Real-Time Collaboration", description: "Instantly connect in genre-based chat rooms. Collaborate on tracks, ask for live feedback, and find creative partners." },
  ];

  const users = [
    { role: "Producers", desc: "Discover unique loops, get your sound heard, and connect with artists looking for beats.", icon: <FaSlidersH size={40} /> },
    { role: "Artists", desc: "Find fresh inspiration for your next track and connect with producers who match your vibe.", icon: <FaMicrophoneAlt size={40} /> },
    { role: "Songwriters", desc: "Co-create with talented producers and find the perfect musical foundation for your lyrics.", icon: <FaMusic size={40} /> },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a]">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(37,99,235,0.12)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(29,78,216,0.09)_0%,_transparent_50%)]"></div>
      </div>

      {/* Header */}
      <Header navLinks={navLinks} ctaText="Sign Up" ctaHref="/signup" />

      {/* Hero Section */}
      <Hero
        title="Loop Labs"
        subtitle="CREATE. CONNECT. COLLABORATE."
        description="The ultimate hub for music creators. Dive into a massive library of community-sourced samples, connect with fellow artists in real-time, and bring your next hit to life."
        primaryCTA={{ href: "/signup", label: "Get Started" }}
        secondaryCTA={{ href: "#features", label: "Explore Features" }}
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
            <span className="text-blue-400 font-semibold">Loop Labs</span> is more than just a sample platform—it’s a creative ecosystem. We believe that the most powerful tracks are born through connection and collaboration. That’s why Loop Labs combines a world-class sample library with community-driven features and real-time interaction.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-6">
            {/* Other Platforms */}
           <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-xl p-8 max-w-md w-full transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]">
              <h4 className="text-red-400 font-bold mb-4 text-xl">Other Platforms</h4>
              <ul className="text-gray-400 text-left text-lg space-y-4">
                <li className="flex items-center"><FaTimesCircle className="mr-3 text-red-500" /> Isolated File Dumping</li>
                <li className="flex items-center"><FaTimesCircle className="mr-3 text-red-500" /> Lacks a True Community</li>
                <li className="flex items-center"><FaTimesCircle className="mr-3 text-red-500" /> No Real-Time Interaction</li>
                <li className="flex items-center"><FaTimesCircle className="mr-3 text-red-500" /> Outdated UI & Rigid Experience</li>
              </ul>
            </div>

            {/* Loop Labs */}
            <div className="bg-white/5 backdrop-blur-sm border border-green-400/40 rounded-xl p-8 max-w-md w-full transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">
              <h4 className="text-green-400 font-bold mb-4 text-xl">Loop Labs</h4>
              <ul className="text-green-200 text-left text-lg space-y-4 ">
                <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-400" /> Thriving, Collaborative Hub</li>
                <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-400" /> Upvotes, Comments & Engaging Forums</li>
                <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-400" /> Live Genre Rooms for Real-Time Collabs</li>
                <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-400" /> Modern, Sleek & Intuitive Interface</li>
              </ul>
            </div>
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold">Core Features of Loop Labs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-10 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                <h3 className="text-white text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* User Roles */}
      <motion.section
        className="relative z-10 py-20 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-16">Built For Every Creator</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {users.map((user) => (
              <div key={user.role} className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-10 text-center flex flex-col items-center hover:border-blue-400/40 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1">
                <div className="text-blue-400 mb-4">{user.icon}</div>
                <h3 className="text-white text-xl font-bold mb-2">{user.role}</h3>
                <p className="text-gray-300">{user.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sample of the Day */}
      <motion.div
        className="py-18 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SampleOfDay audioUrl={sample1} genre="Trap" bpm={140} keySignature="F#m" uploader="@Prod_siddhant" />
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
          href="/samples"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-all duration-300"
        >
          Explore The Sample Library
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
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">Ready to join the community?</h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
            Stop searching, start creating. Dive into a world of endless samples, live chat rooms, and creative feedback.
          </p>
          <a href="/signup" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-transform duration-300">
            Get Started
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer
        tagline="A global community, built by and for creators."
        links={[{ href: "#", label: "Privacy" }, { href: "#", label: "Terms" }, { href: "#", label: "Support" }, { href: "#", label: "Contact" }]}
      />
    </div>
  );
};

export default Landing;
