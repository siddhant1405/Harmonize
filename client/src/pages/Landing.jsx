import React from "react";
import { motion } from "framer-motion";

// Components
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import GradientButton from "../components/GradientButton";


// Assets
import sample1 from "../assets/sample/sample1.mp3";
import prodImage from "../assets/images/producer.jpg";
import writerImage from "../assets/images/artist.jpg";
import engineerImage from "../assets/images/engineer.jpg";
import sid from "../assets/images/dev.jpg";

// Icons
import {
  FaSearch,
  FaUserCircle,
  FaComments,
  FaTimesCircle,
  FaCheckCircle,
  FaTrophy,
  FaCircle,
  FaMapMarkerAlt,
  FaRobot,
  FaWaveSquare,
} from "react-icons/fa";

const Landing = () => {
  const navLinks = [
    { href: "#what-is-harmonize", label: "What is Harmonize" },
    { href: "#features", label: "Features" },
    { href: "/about", label: "About Us" },
    { href: "/login", label: "Login" },
  ];

    const features = [
      {
        title: "Smart Collab Matching",
        description:
          "AI-powered matchmaking connects producers, vocalists, and mixers based on your musical style, role, and collaboration goals. Find your perfect creative partner in minutes, not months.",
        icon: <FaRobot size={36} className="text-blue-400 mb-4" />,
        highlights: ["AI Music Style Analysis", "Role-Based Matching", "Instant Accept/Decline"]
      },
      {
        title: "Collab Requests with Audio",
        description:
          "Send collaboration requests with context-rich audio snippets, demo tracks, or reference files directly. Artists can instantly listen, comment, and approve without leaving the platform.",
        icon: <FaWaveSquare size={36} className="text-purple-400 mb-4" />,
        highlights: ["Inline Audio Previews", "Context-Rich Requests", "Quick Approve/Decline"]
      },
      {
        title: "Project-Focused Chat",
        description:
          "Collab chat built for music creation. Share audio files inline with waveform previews, pin project details (BPM, key, deadlines), track revisions, and manage tasks seamlessly.",
        icon: <FaComments size={36} className="text-green-400 mb-4" />,
        highlights: ["Inline Audio Waveforms", "Pinned Notes & Deadlines", "File Version Control"]
      },
      {
        title: "Creative Profiles",
        description:
          "Showcase your top tracks, highlight your skills and what you're seeking in collaborators. Build credibility with portfolio samples and send one-click collab requests.",
        icon: <FaUserCircle size={36} className="text-yellow-400 mb-4" />,
        highlights: ["Music Portfolio Showcase", "Skills & Seeking Tags", "One-Click Requests"]
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
      description: "Upload your beats, get matched with vocalists who fit your style, collaborate on arrangements, and turn your productions into complete songs. Connect with other producers for remix opportunities.",
      image: prodImage,
      color: "blue",
    },
    {
      title: "Vocalists & Songwriters",
      description: "Discover productions that match your vocal style, collaborate with producers worldwide, contribute melodies and lyrics, and build your catalog with quality instrumentals.",
      image: writerImage,
      color: "blue",
    },
    {
      title: "Musicians & Engineers",
      description: "Add live instrumentation to digital productions, provide mixing and mastering services, and connect with artists who need your technical skills to bring their vision to life.",
      image: engineerImage,
      color: "blue",
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
    <div className="relative w-full overflow-hidden font-sans bg-black min-h-screen text-white">
      
       <Header navLinks={navLinks} ctaText="Join Now" ctaHref="/signup" />
      
      {/* Hero Section */}
      <Hero
        title="Harmonize"
        subtitle="Create. Connect. Collaborate."
        description="AI-powered music collaboration platform. Get matched with the perfect creative partners, collaborate seamlessly, and turn ideas into finished tracks."
        primaryCTA={{ href: "/signup", label: "Find Collaborators" }}
        secondaryCTA={{ href: "#features", label: "See How It Works" }}
      />

     <motion.section
        id="what-is-harmonize"
        className="relative z-10 py-20 px-6"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            What is Harmonize?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
            Today's music collaboration is <span className="text-blue-400 font-semibold">broken and fragmented</span>.  
            You scroll through endless social feeds hoping to find the right collaborator, send cold DMs with no context, 
            then struggle with file sharing across WhatsApp, email, and random cloud drives. Projects get lost, communication breaks down, and great ideas never become songs.
            <br /><br />
            <span className="text-blue-400 font-semibold">Harmonize</span> fixes this. Get intelligently matched with collaborators who complement your style, 
            manage projects with tools built for music creation, and focus on what matters — making great music together.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-6">
          {/* Other Platforms */}
          <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-xl p-8 max-w-md w-full transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]">
            <h4 className="text-red-400 font-bold mb-4 text-xl">
              The Old Way
            </h4>
            <ul className="text-gray-400 text-left text-lg space-y-4">
              <li className="flex items-center">
                <FaTimesCircle className="mr-3 text-red-500" />
                Endless Scrolling for Collaborators
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="mr-3 text-red-500" />
                Cold DMs with No Context
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="mr-3 text-red-500" />
                File Chaos Across Multiple Apps
              </li>
              <li className="flex items-center">
                <FaTimesCircle className="mr-3 text-red-500" />
                Lost Projects & Broken Communication
              </li>
            </ul>
          </div>

          {/* Harmonize */}
          <div className="bg-white/5 backdrop-blur-sm border border-green-400/40 rounded-xl p-8 max-w-md w-full transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">
            <h4 className="text-green-400 font-bold mb-4 text-xl">
              The Harmonize Way
            </h4>
            <ul className="text-green-200 text-left text-lg space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-400" />
                AI Matches Your Perfect Partners
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-400" />
                Context-Rich Collaboration Requests
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-400" />
                Project Chat with Audio Integration
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="mr-3 text-green-400" />
                Organized Workflow & File Management
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
              Core Features Of Harmonize
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Everything you need to find collaborators, connect meaningfully, and create together — built specifically for music.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center flex flex-col"
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

      {/* Who Can Use Harmonize */}
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
              Built for every music creator
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Whether you create beats, write songs, or engineer tracks — find your perfect creative match
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whoCanUseRoles.map((role, index) => (
              <motion.div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col ${roleStyles[role.color]}`}
              >
                <div className="text-center">
                  <img src={role.image} alt={role.title} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-white/20"/>
                  <h3 className="text-white text-2xl font-bold mb-3">{role.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {role.description}
                  </p>
                </div>
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
              From finding your perfect match to finishing your track — streamlined collaboration in 4 steps
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
                { step: "1", title: "Create Your Profile", desc: "Upload your best tracks, set your role and genres", icon: <FaUserCircle className="text-blue-400" /> },
                { step: "2", title: "Get Smart Matches", desc: "AI finds collaborators who complement your style", icon: <FaRobot className="text-green-400" /> },
                { step: "3", title: "Connect & Plan", desc: "Send requests, chat with project-focused tools", icon: <FaComments className="text-purple-400" /> },
                { step: "4", title: "Create Together", desc: "Track progress from idea to finished song", icon: <FaTrophy className="text-yellow-400" /> }
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
            Ready to find your perfect collaborator?
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
            Stop wasting time searching. Let AI connect you with creators who match your style and vision. 
            Your next breakthrough track is just one collaboration away.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
          <GradientButton to="/signup" size="large" variant="blue" glow={true}>
            Start Collaborating Now
          </GradientButton>
          <GradientButton to="/about" size="large" variant="transparent" glow={false}>
            Learn More
          </GradientButton>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Landing;