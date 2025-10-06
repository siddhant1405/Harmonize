// src/pages/CollabResultsPage.js

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CollabResults from "../components/Results"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

// Navigation links for the header on this page
const navLinks = [
  { label: "Find Collabs", href: "/findcollab" },
  { label: "Messages", href: "/messages" },
  { label: "Profile", href: "/profile" },
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
      navigate("/findcollab");
    }
  }, [matches, navigate]);

  // While redirecting, render nothing to prevent a flash of an empty page
  if (!matches) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden font-sans bg-black min-h-screen text-white">
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
      <Footer />
    </div>
  );
};

export default CollabResultsPage;
