// src/components/Navbar.jsx
import React from "react";

const navItems = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "works", label: "MY WORKS" },   // <- changed
  { id: "services", label: "SERVICES" },
  {id: "contact", label: "Contact"},
];

const Navbar = ({ activeSection, onNavClick }) => {
  const scrollTo = (id) => {
    if (onNavClick) return onNavClick(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 text-lg font-semibold cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          <span className="text-black text-2xl">✦</span>
          <span>karthik.</span>
        </div>

        {/* Middle Menu */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center bg-[#e6e6e6] rounded-full px-1 py-1 overflow-x-auto max-w-full gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hire me */}
        <button
          onClick={() => scrollTo("contact")}
          className="px-4 sm:px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-semibold shrink-0"
        >
          Hire me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
