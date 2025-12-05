import React from "react";
import heroImg from "../assets/karthik.png"; // 👈 change name/path if needed

const Hero = () => {
  return (
    <section className="bg-[#eef6ff] min-h-[60vh] md:min-h-[80vh] flex items-center py-10 md:py-0">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-10">
        
        {/* Left content */}
        <div className="flex-1 space-y-6">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-xs font-semibold">
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
            <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold">
              Let&apos;s Talk
            </button>
            <button className="px-6 py-3 rounded-full bg-[#e6e6e6] text-sm font-semibold">
              My Works
            </button>
          </div>
        </div>

        {/* Right image card */}
        <div className="flex-1 flex justify-center">
          <div>
            <img
              src={heroImg}
              alt="Karthik"
              className="w-full h-full object-cover"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;