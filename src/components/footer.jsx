import React from "react";

const Footer = ({ onNavClick }) => {
  return (
    <footer className="bg-white/90 backdrop-blur-lg border-t border-gray-200 py-10 mt-20">

      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">

        {/* Logo */}
        <div
          className="flex justify-center items-center gap-2 text-xl font-semibold cursor-pointer"
          onClick={() => onNavClick("home")}
        >
          <span className="text-black text-2xl">✦</span>
          <span>karthik.</span>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 text-sm font-medium text-gray-700">
          <button onClick={() => onNavClick("home")} className="hover:text-black">
            Home
          </button>
          <button onClick={() => onNavClick("about")} className="hover:text-black">
            About
          </button>
          <button onClick={() => onNavClick("portfolio")} className="hover:text-black">
            Portfolio
          </button>
          <button onClick={() => onNavClick("services")} className="hover:text-black">
            Services
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-gray-700">
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-black"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://dribbble.com"
            target="_blank"
            className="hover:text-black"
          >
            <i className="fa-brands fa-dribbble"></i>
          </a>

          <a
            href="https://behance.net"
            target="_blank"
            className="hover:text-black"
          >
            <i className="fa-brands fa-behance"></i>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-black"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} karthik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
