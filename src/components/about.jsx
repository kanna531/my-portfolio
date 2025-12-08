import React from "react";
import aboutImg from "../assets/about-photo.png"; 
import resumeFile from "../assets/karthik_Resume.pdf"; // 👈 IMPORTANT

const About = () => {
  return (
    <section className="bg-[#eef6ff] py-16">
      <div className="max-w-6xl mx-auto mt-10 md:mt-14 px-6 flex flex-col md:flex-row items-center gap-10">

        {/* Left image */}
        <div className="flex-1 flex justify-center">
          <div >
             <img src={aboutImg} alt="About" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-5">
          <h3 className="text-lg font-semibold text-gray-700">About me</h3>

          <p className="text-gray-800 leading-relaxed text-lg">
            Hey! i’m karthik, a designer who loves clean visuals and smart user
            experiences. From branding to ui design, i create work that feels
            modern and purposeful. I’ve collaborated with startups and teams to
            build designs that truly stand out. Design for me is storytelling –
            simple, bold, and human.
          </p>

          {/* Download Resume Button */}
          <a
            href={resumeFile}
            download="Karthik-Resume.pdf"    // 👈 This triggers the download
            className="inline-block px-6 py-3 rounded-full bg-black text-white text-sm font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
