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
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
            Empowering Music Through Collaboration
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Loop Labs, we believe the future of music is connected. Our mission is to remove
            creative barriers and provide producers with a space where sharing ideas, discovering
            sounds, and building tracks together is effortless and inspiring.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="flex justify-center mb-20">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-10 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Our Philosophy
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg text-center">
              Great music doesn’t happen in isolation. Whether you’re a bedroom producer or an
              industry veteran, collaboration sparks creativity. Loop Labs was designed to be more
              than a tool—it’s a thriving ecosystem where artists can share loops, exchange ideas,
              and inspire each other every single day.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            A Message from Our Founder
          </h2>
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/40 max-w-sm hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <img src={devImage} alt="Developer" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">Siddhant Gupta</h3>
              <p className="text-blue-400 font-medium mb-4">
                Full Stack Developer & Music Producer
              </p>
              <p className="text-gray-300 text-base mb-6">
                "As both a developer and a producer, I built Loop Labs to create the platform I
                always wished existed—a place where creativity meets community. This is more than
                a website; it’s a movement to bring music makers together."
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-12 text-center transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Your Next Hit Starts Here.
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join a global network of forward-thinking producers. Share your loops, discover fresh
            sounds, and turn ideas into chart-toppers—together.
          </p>
          <a
            href="/signup"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_#2563eb] transition-all duration-300"
          >
            Join the Community
          </a>
        </div>
      </main>

      <Footer
        tagline="Loop Labs | Built for creators, by creators."
        links={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
          { href: "/contact", label: "Contact" },
        ]}
      />
    </div>
  );
};

export default AboutUs;
