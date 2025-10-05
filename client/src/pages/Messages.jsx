import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profileImg from "../assets/images/producer.jpg"; // Artist image


const Message = ({ text, sender }) => (
  <div
    className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
      sender === "user"
        ? "bg-blue-500/30 self-end text-white"
        : "bg-white/10 self-start text-gray-200"
    }`}
  >
    {text}
  </div>
);

const Messages = () => {
  const navLinks = [
    { href: "/findcollab", label: "Find Collab" },
    { href: "/profile", label: "Profile" },
  ];

  const [messages, setMessages] = useState([
    { id: 1, sender: "artist", text: "Hey! Excited to collab with you." },
    { id: 2, sender: "user", text: "Me too! Got any ideas for the track?" },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      { id: prev.length + 1, sender: "user", text: input.trim() },
    ]);
    setInput("");
  };

  return (
    <div className="relative w-full min-h-screen font-sans bg-black text-white">
      <Header navLinks={navLinks} ctaText="Log Out" ctaHref="/" />

      {/* Chat Header */}
      <div className="flex flex-col items-center p-4 border-b border-blue-500/20 bg-white/5 backdrop-blur-sm">
        <img
          src={profileImg}
          alt="Artist"
          className="w-20 h-20 rounded-full border-2 border-blue-500 mb-2 object-cover"
        />
        <h2 className="text-xl font-bold text-blue-300">Siddhant Gupta</h2>
        <p className="text-gray-400 text-sm">Producer & Developer</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
        {messages.map(msg => (
          <Message key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-blue-500/20 bg-white/5 backdrop-blur-sm flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
          className="flex-1 px-4 py-2 rounded-lg bg-black/30 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:brightness-110 transition-all"
        >
          Send
        </button>
      </div>

      <Footer/>
    </div>
  );
};

export default Messages;
