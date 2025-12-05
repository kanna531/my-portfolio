import React from "react";
import aboutImg from "../assets/about-photo.png"; // replace with your image

const About = () => {
  return (
    <section className="bg-[#eef6ff] py-16">
      
      {/* Top Skills Row */}
      <div className="w-full border-y border-gray-300 py-3 bg-white/40 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700">
          <span>✦ Graphic Designing</span>
          <span>✦ UI/UX Design</span>
          <span>✦ Social Media Mangement</span>
          <span>✦ Content Creation</span>
          <span>✦ Video Editor</span>
        </div>
      </div>

      {/* Main About Layout */}
      <div className="max-w-6xl mx-auto mt-10 md:mt-14 px-6 flex flex-col md:flex-row ...">
        
        {/* Left Circular Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-85 h-85 md:w-100 md:h-100 rounded-full">
              <img
                          src={aboutImg}
                          alt="Karthik"
                          className="w-full h-full object-cover"
                        />
            {/* If you want to add the image, uncomment below */}
            {/* <img src={aboutImg} alt="About" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex-1 space-y-5">
          <h3 className="text-lg font-semibold text-gray-700">About me</h3>

          <p className="text-gray-800 leading-relaxed text-lg">
            Hey! i’m karthik, a designer who loves clean visuals and smart user
            experiences. From branding to ui design, i create work that feels
            modern and purposeful. I’ve collaborated with startups and teams to
            build designs that truly stand out. Design for me is storytelling -
            simple, bold, and human.
          </p>

          <button className="mt-4 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold shadow-md">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;