// src/components/Navbar.jsx
import React from "react";

const navItems = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "portfolio", label: "PORTFOLIO" },
  { id: "services", label: "SERVICES" },
];

const Navbar = ({ activeSection, onNavClick }) => {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-5 bg-[#eef6ff] sticky top-0 z-50">
      {/* Logo */}
<div
  className="flex items-center gap-2 text-xl font-semibold cursor-pointer"
  onClick={() => onNavClick("home")}
>
  <span className="text-black text-2xl">✦</span>
  <span>karthik.</span>
</div>

      {/* Middle Menu */}
      <div className="flex items-center bg-[#e6e6e6] rounded-full px-1 py-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
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

      {/* Hire me */}
      <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold">
        Hire me
      </button>
    </nav>
  );
};

export default Navbar;
