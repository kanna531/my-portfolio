import React from "react";

const works = [
  {
    id: 1,
    title: "E-commerce UI Design",
    tag: "UI/UX · App Design",
    image:
      "https://via.placeholder.com/400x300.png?text=Your+Work+1",
  },
  {
    id: 2,
    title: "Branding & Logo Design",
    tag: "Branding",
    image:
      "https://via.placeholder.com/400x300.png?text=Your+Work+2",
  },
  {
    id: 3,
    title: "Social Media Poster",
    tag: "Graphic Design",
    image:
      "https://via.placeholder.com/400x300.png?text=Your+Work+3",
  },
  {
    id: 4,
    title: "Landing Page Redesign",
    tag: "UI/UX",
    image:
      "https://via.placeholder.com/400x300.png?text=Your+Work+4",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-[#eef6ff] py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        
        {/* Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Portfolio
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl">
            A selection of my recent UI/UX, graphic design, and creative projects.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="h-44 bg-gray-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-4 space-y-2">
                <span className="inline-flex text-[11px] font-medium px-3 py-1 rounded-full bg-[#eef6ff] text-gray-700 w-fit">
                  ✦ {item.tag}
                </span>

                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
