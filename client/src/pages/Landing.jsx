import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


// Component Imports
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";
import SampleOfDay from "../components/SampleOfDay";


// Asset Imports
import sample1 from "../assets/sample/sample1.mp3"; 


// Icon Imports
import { 
    FaTimesCircle, 
    FaCheckCircle, 
    FaSlidersH,
    FaMicrophoneAlt,
    FaMusic
} from 'react-icons/fa';


const Landing = () => {
  const navLinks = [
    { href: "#what-is-loop-labs", label: "What is Loop Labs" },
    { href: "#features", label: "Features" },
    { href: "/samples", label: "Sample Library" },
    { href: "/about", label: "About Us" },
    {href: "/login", label: "Login" },
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
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' });
  }, []);


  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a]">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(37,99,235,0.12)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(29,78,216,0.09)_0%,_transparent_50%)]"></div>
      </div>


      <Header navLinks={navLinks} ctaText="Get Started" ctaHref="/signup" />


      <Hero
        title="Loop Labs"
        subtitle="CREATE. CONNECT. COLLABORATE."
        description="The ultimate hub for music creators. Dive into a massive library of community-sourced samples, connect with fellow artists in real-time, and bring your next hit to life."
        primaryCTA={{ href: "/signup", label: "Get Started" }}
        secondaryCTA={{ href: "#features", label: "Explore Features" }}
      />


      <section id="what-is-loop-labs" className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">What is Loop Labs?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <span className="text-blue-400 font-semibold">Loop Labs</span> is the creative heartbeat for producers, artists, and songwriters. We're a platform built on the idea that the best music happens when we come together.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-6">
            <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-xl p-8 max-w-md w-full" data-aos="fade-right">
              <h4 className="text-red-400 font-bold mb-4 text-xl">Other Platforms</h4>
              <ul className="text-gray-400 text-left text-lg space-y-4">
                  <li className="flex items-center"><FaTimesCircle className="mr-3 text-red-500 flex-shrink-0" /> Isolated File Dumping</li>
                  <li className="flex items-center"><FaTimesCircle className="mr-3 text-red-500 flex-shrink-0" /> Lacks a True Community</li>
                  <li className="flex items-center"><FaTimesCircle className="mr-3 text-red-500 flex-shrink-0" /> No Real-Time Interaction</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-green-400/40 rounded-xl p-8 max-w-md w-full" data-aos="fade-left">
              <h4 className="text-green-400 font-bold mb-4 text-xl">Loop Labs</h4>
              <ul className="text-green-200 text-left text-lg space-y-4">
                  <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-400 flex-shrink-0" /> Thriving, Collaborative Hub</li>
                  <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-400 flex-shrink-0" /> Upvotes, Comments & Forums</li>
                  <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-400 flex-shrink-0" /> Live Genre & Collab Rooms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-white text-4xl md:text-5xl font-bold" data-aos="fade-up">Core Features Loop Labs</h2>
            </div>
            {/* The STATS grid that was here has been REMOVED */}
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    // MODIFICATION: Added hover shadow for a "glow" effect and adjusted transition.
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-10 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]" data-aos="fade-up" data-aos-delay={idx * 150}>
                        <h3 className="text-white text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>


      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-16" data-aos="fade-up">Built For Every Creator</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {users.map((user, idx) => (
              // MODIFICATION: Added hover shadow for a "glow" effect and a subtle lift.
              <div key={user.role} className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-10 text-center flex flex-col items-center hover:border-blue-400/40 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-1" data-aos="zoom-in" data-aos-delay={idx * 120}>
                <div className="text-blue-400 mb-4">{user.icon}</div>
                <h3 className="text-white text-xl font-bold mb-2">{user.role}</h3>
                <p className="text-gray-300">{user.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* The TESTIMONIALS section that was here has been REMOVED */}
      
      {/* --- MODIFICATION START --- */}
      <div className="py-18 px-6">
  
          <SampleOfDay audioUrl={sample1} genre="Trap" bpm={140} keySignature="F#m" uploader="@producer123"/>
        </div>

        {/* Added new button with requested styling and link */}
        <div className="text-center mt-12">
            <a 
              href="/samples" 
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-all duration-300" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Explore The Sample Library
            </a>

      </div>
      {/* --- MODIFICATION END --- */}


      <section className="relative z-10 py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8" data-aos="zoom-in">Ready to join the community?</h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto" data-aos="zoom-in" data-aos-delay="150">
            Stop searching, start creating. Dive into a world of endless samples, live chat rooms, and creative feedback.
          </p>
          <a href="/auth" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-transform duration-300" data-aos="zoom-in" data-aos-delay="300">
            Get Started 
          </a>
        </div>
      </section>


      <Footer
        tagline="A global community, built by and for creators."
        links={[{ href: "#", label: "Privacy" }, { href: "#", label: "Terms" }, { href: "#", label: "Support" }, { href: "#", label: "Contact" }]}
      />
    </div>
  );
};


export default Landing;
