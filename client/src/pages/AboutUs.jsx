import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import devImage from "../assets/images/dev.jpg"; // Your developer image

const AboutUs = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/samples", label: "Sample Library" },
  ];

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a] min-h-screen text-white">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(37,99,235,0.12)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(29,78,216,0.09)_0%,_transparent_50%)]"></div>
      </div>

      <Header navLinks={navLinks} ctaText="Sign Up" ctaHref="/signup" />

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
            CREATE. CONNECT. COLLABORATE.
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Loop Labs isn't just another music platform—it's the epicenter of sonic innovation. 
            We're building bridges between bedroom producers and chart-topping artists, creating 
            a universe where every loop has the potential to become legendary.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              To democratize music creation by connecting talented producers worldwide, 
              breaking down geographical and financial barriers that limit creative expression. 
              Every beat deserves to be heard, every producer deserves recognition.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-purple-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.3)]">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              To become the global heartbeat of music collaboration, where the next Grammy-winning 
              track is born from a chance encounter between two producers who've never met, 
              united only by their passion for sonic perfection.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Community First</h3>
              <p className="text-gray-300 text-sm">Built by producers, for producers. Every feature is designed with real artist needs in mind.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Modern Interface</h3>
              <p className="text-gray-300 text-sm">Sleek, intuitive, and built for speed so you can focus on creating music, not figuring out UI.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">Global Reach</h3>
              <p className="text-gray-300 text-sm">Connect with producers from every corner of the world. Music has no borders here.</p>
            </div>
          </div>
        </div>

        {/* Meet the Founder */}
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
              <p className="text-blue-400 text-md mb-4">Full stack developer • Music producer</p>
              <p className="text-gray-300 text-base mb-6">
              "Hey reader, I am a developer and a hobbyist music producer. Loop Labs was created out of the desire
                to merge my two passions : music and technology into something that truly adds value. It is my way of 
                giving back to the producer community by building a platform that makes collaboration easier, 
                creativity more accessible, and the entire process more enjoyable for everyone."
              </p>
               <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/siddhant-gupta-371665287"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm hover:scale-105 hover:shadow-[0_0_20px_#2563eb] transition transform flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
                Connect
              </a>
              <a
                href="/contact"
                className="bg-white/10 border border-blue-500/20 text-white px-4 py-2 rounded-lg font-medium text-sm hover:scale-105 hover:bg-white/20 transition transform"
              >
                Get in Touch
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
            Join producers who are already collaborating, learning, and creating 
            the next generation of hits. Your sound could be the missing piece in someone's 
            masterpiece—and theirs could be the key to yours.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/signup"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-all duration-300"
            >
              Start Creating Today
            </a>
            <a
              href="/samples"
              className="inline-block bg-white/10 border border-blue-500/20 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              Explore Samples
            </a>
          </div>
        </div>
      </main>

      <Footer
        tagline="Loop Labs | Where every loop tells a story."
        links={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
          { href: "/contact", label: "Contact" },
          { href: "/careers", label: "Careers" },
        ]}
      />
    </div>
  );
};

export default AboutUs;
