import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { findMatchesAPI } from "../utils/mockAPI"; 
import CollabForm from "../components/CollabForm";
import LoadingOverlay from "../components/LoadingOverlay";
import Header from "../components/Header";
import Footer from "../components/Footer";

const navLinks = [
  { label: "Messages", href: "/messages" },
  { label: "Profile", href: "/profile" },
];

const FindCollab = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (formData) => {
    setIsLoading(true);
    const results = await findMatchesAPI(formData);
    navigate("/collabresults", { state: { matches: results } });
  };

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a] min-h-screen text-white flex flex-col items-center">
      
      {/* HEADER */}
      <Header navLinks={navLinks} ctaText="Log Out" ctaHref="/" />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center w-full mt-12 mb-12">
        <AnimatePresence>
          {isLoading && <LoadingOverlay />}
        </AnimatePresence>

        <div className={isLoading ? "blur-md w-full max-w-4xl" : "w-full max-w-4xl"}>
          <CollabForm onSearch={handleSearch} />
        </div>  
      </div>
      <div className="w-full">
        <Footer 
          tagline="Harmonize — Built for creators, by creators."
          links={[{ href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }]}
        />
      </div>
    </div>
    
  );
};

export default FindCollab;
