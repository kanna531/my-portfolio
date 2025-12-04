import React from "react";

const services = [
  {
    title: "UI/UX Design",
    desc: "Designing clean, intuitive interfaces that put users first and keep the experience smooth across web and mobile.",
  },
  {
    title: "Graphic Designing",
    desc: "Creating modern visuals, posters, social media creatives, and brand assets that feel bold and memorable.",
  },
  {
    title: "Social Media Management",
    desc: "Designing and planning content that keeps brands active, consistent, and engaging on social platforms.",
  },
  {
    title: "Content Creation",
    desc: "Crafting visual + written content that tells your story clearly and connects with your audience.",
  },
  {
    title: "Video Editing",
    desc: "Editing reels and videos with smooth cuts, pacing, and motion that match your brand’s energy.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#eef6ff] py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="text-center mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    Services
  </h2>
  <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
    I help brands and teams with design that looks good, works well,
    and feels human – from visuals to full digital experiences.
  </p>
</div>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform"
            >
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-[#eef6ff] text-gray-700 mb-3">
                ✦ {service.title}
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
