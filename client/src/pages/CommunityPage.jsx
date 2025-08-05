import React from "react";

const Community = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#0B1020] via-[#08080D] to-[#151515]">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Loop Labs Community
        </h1>
        <p className="text-gray-300 text-lg mb-10 text-center">
          Connect with other producers, join live genre chats, post your tracks, get feedback, and collaborate in real time!
        </p>
        {/* Placeholder for forum/blog/feed list and live chat room links */}
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-72 text-center">
            <div className="text-3xl mb-2">💬</div>
            <div className="text-lg text-white font-semibold">Genre Chat Rooms</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-72 text-center">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-lg text-white font-semibold">Community Blog/Forum</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-72 text-center">
            <div className="text-3xl mb-2">🤝</div>
            <div className="text-lg text-white font-semibold">Find Collaborators</div>
          </div>
        </div>
        {/* Add more subcomponents for posts/chat features as you build */}
      </div>
    </section>
  );
};

export default Community;
