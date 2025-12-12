import React from "react";
import aboutImg from "../assets/about-photo.png";
import resume from "../assets/karthik_Resume.pdf";

const About = () => {
  return (
    <section className="bg-[#eef6ff] py-10 md:py-12 -mt-20"> 
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="">
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            About me
          </h3>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Hey! i’m karthik, a designer who loves clean visuals and smart user
            experiences. From branding to ui design, i create work that feels
            modern and purposeful. I’ve collaborated with startups and teams to
            build designs that truly stand out. Design for me is storytelling –
            simple, bold, and human.
          </p>

          <a
            href={resume}
            download="Karthik-Resume.pdf"
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
