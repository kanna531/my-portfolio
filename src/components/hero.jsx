// src/components/Hero.jsx
import React from "react";
import heroImg from "../assets/karthik.png"; // update path if needed

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-[#eef6ff]">
      <div className="max-w-6xl mx-auto min-h-[50vh] md:min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 py-6 md:py-10">
        {/* Left content */}
        <div className="flex-1 space-y-6">
          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-xs font-semibold"
            aria-label="Available for opportunities"
          >
            <span className="text-lg">✦</span>
            <span>Available For Opportunities</span>
          </button>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Hey, I&apos;m Karthik
            <br />
            <span className="block">UI/UX Designer</span>
          </h1>

          <p className="text-sm md:text-base text-gray-600 max-w-md">
            Building professional, user-friendly designs that support
            functionality and boost user engagement.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Let's Talk - scroll to contact */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold transform transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            >
              Let&apos;s Talk
            </button>

            {/* My Works - scroll to works */}
            <button
              onClick={() => scrollToSection("works")}
              className="px-6 py-3 rounded-full bg-[#e6e6e6] text-sm font-semibold text-gray-800 transform transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
            >
              My Works
            </button>
          </div>
        </div>

        {/* Right image card */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="">
            <img
              src={heroImg}
              alt="Karthik portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
