// src/pages/CollabResultsPage.js

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CollabResults from "../components/Results"; // Ensure this path is correct
import Header from "../components/Header";
import Footer from "../components/Footer";

// Navigation links for the header on this page
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Find Collab", href: "/find-collabs" },
];

const CollabResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve the matches passed via state from the form page
  const matches = location.state?.matches;

  // This effect ensures that if a user lands on this page directly 
  // without any match data, they are redirected back to the form.
  useEffect(() => {
    if (!matches) {
      navigate("/find-collabs");
    }
  }, [matches, navigate]);

  // While redirecting, render nothing to prevent a flash of an empty page
  if (!matches) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden font-sans bg-gradient-to-br from-[#050505] via-[#080808] to-[#0a0f1a] min-h-screen text-white flex flex-col">
      
      {/* HEADER */}
      <Header navLinks={navLinks} ctaText="Log Out" ctaHref="/" />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-start p-6 mt-10 mb-16">
        <div className="w-full max-w-7xl">
          {/* The results component receives the match data and handles the display */}
          <CollabResults matches={matches} />
        </div>
      </main>

      {/* FOOTER */}
      <Footer 
        tagline="Harmonize — Built for creators, by creators."
        links={[{ href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }]}
      />
    </div>
  );
};

export default CollabResultsPage;
