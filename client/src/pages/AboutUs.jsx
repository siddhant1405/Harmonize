import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import devImage from "../assets/images/dev.jpg"; // Your developer image

const AboutUs = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/community", label: "The Community" },
    { href: "/features", label: "Features" },
    { href: "/signup", label: "Sign Up" },
  ];

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a] min-h-screen text-white">

      <Header navLinks={navLinks} ctaText="Join Now" ctaHref="/signup" />

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            CREATE. CONNECT. COLLABORATE.
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Harmonize is not just another platform—it’s where creators connect, share, and build together. 
            Whether you're a producer, vocalist, or mixer, our community and tools are designed to amplify your creative process.
          </p>
        </div>

        {/* The Developer's Vision */}
        <div className="mb-20 bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-10 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            The Developer's Vision
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center">
            Harmonize was born out of a simple question: "What if collaboration was seamless and music production was built around a true community?" 
            As a developer and passionate music producer, I experienced the struggles firsthand—disorganized projects, lost files, and missed creative opportunities. 
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center mt-6">
            I still remember making a beat where I envisioned an electric guitar outro. I had no idea where to find a guitarist or even a place to ask for feedback on the track. 
            That frustration stayed with me and pushed me to think about how many other creators face the same wall.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center mt-6">
            This platform isn’t just a tool for sharing music—it’s a space for creative partnerships, where every user is part of a greater community. 
            It's about finding the right collaborators, sharing feedback, and making music that transcends borders.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center mt-6 italic">
            Harmonize is a movement—for producers who want to collaborate easily, for vocalists who want to get heard, and for mixers who want to bring creative visions to life. 
            Collaboration isn’t an afterthought here—it’s the heart of everything.
          </p>
        </div>

        {/* What Makes Harmonize Different */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            What Makes Harmonize Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Community-Driven</h3>
              <p className="text-gray-300 text-sm">
                With features like a Reddit-style feed, genre challenges, and feedback loops, the platform fosters real community engagement.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Smart Collab Matchmaking</h3>
              <p className="text-gray-300 text-sm">
                Our platform’s role-based matchmaking ensures you’ll connect with the right collaborators, based on your needs and musical style.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">Simplified Project Management</h3>
              <p className="text-gray-300 text-sm">
                Keep your projects organized with smart DMs, inline audio sharing, and project tracking tools—streamlining your collaboration from idea to final track.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Developer */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Meet the Developer
          </h2>
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/40 max-w-md hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <img src={devImage} alt="Siddhant Gupta - Developer" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Siddhant Gupta</h3>
              <p className="text-blue-400 text-md mb-4">Full Stack Developer • Music Producer</p>
              <p className="text-gray-300 text-base mb-6">
                As a music producer and developer, Harmonize is my way of merging two passions: technology and music. 
                This platform is all about removing barriers for creators and making the collaboration process easier, faster, and more rewarding.
              </p>
              <div className="flex justify-center gap-4">
                {/* LinkedIn Button */}
                <a
                  href="https://linkedin.com/in/siddhant-gupta-371665287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm hover:scale-105 hover:shadow-[0_0_20px_#2563eb] transition transform flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Connect
                </a>
                {/* Email Button */}
                <a
                  href="mailto:guptasiddhant1405@gmail.com?subject=Collaboration%20Request&body=Hi%20Siddhant,"
                  className="bg-white/10 border border-blue-500/20 text-white px-4 py-2 rounded-lg font-medium text-sm hover:scale-105 hover:bg-white/20 transition transform flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.94 4.44A2 2 0 014.4 4h11.2a2 2 0 011.46.44L10 9.88 2.94 4.44z" />
                    <path d="M18 6.12v7.76A2 2 0 0116 16H4a2 2 0 01-2-2V6.12l8 5.76 8-5.76z" />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-12 text-center transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Make Music History?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Join producers, vocalists, and mixers who are already collaborating, learning, and creating the next generation of hits. 
            Your next hit starts with your next connection.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/signup"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-all duration-300"
            >
              Sign Up Now
            </a>
            <a
              href="/community"
              className="inline-block bg-white/10 border border-blue-500/20 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              Visit The Community
            </a>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default AboutUs;
