// src/components/Footer.jsx
import React from "react";

const Footer = ({ onNavClick }) => {
  const go = (id) => {
    if (onNavClick) return onNavClick(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#eef6ff] border-t border-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        <div
          onClick={() => go("home")}
          className="flex justify-center items-center gap-2 text-xl font-semibold cursor-pointer"
        >
          <span className="text-black text-2xl">✦</span>
          <span>karthik.</span>
        </div>

        <div className="flex justify-center gap-6 text-sm font-medium text-gray-700">
          <button onClick={() => go("home")} className="hover:text-black">Home</button>
          <button onClick={() => go("about")} className="hover:text-black">About</button>
          <button onClick={() => go("works")} className="hover:text-black">My Works</button>
          <button onClick={() => go("services")} className="hover:text-black">Services</button>
           <button onClick={() => go("contact")} className="hover:text-black">Contact</button>
        </div>

        <div className="flex justify-center gap-6 text-xl text-gray-700">
          {/* social links */}
        </div>

        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} karthik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
