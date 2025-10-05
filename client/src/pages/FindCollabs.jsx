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
<div className="relative w-full overflow-hidden font-sans bg-black min-h-screen text-white">

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
        <Footer />
      </div>
    </div>
    
  );
};

export default FindCollab;
