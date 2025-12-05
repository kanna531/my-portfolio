import React, { useMemo, useState } from "react";

// 🔁 Import your files here (png / jpg / pdf)
import social1 from "../assets/1.jpg";
import web1 from "../assets/1.jpg";
import posterPdf from "../assets/1.jpg";
import postPdf from "../assets/6.pdf";

const CATEGORIES = [
  "All",
  "Social Creatives",
  "Web Designs",
  "Print Designs",
  "Political Posters",
  "Brand Board",
];

// Master list of your works
const allWorks = [
  {
    id: 1,
    title: "Instagram Carousel for Brand X",
    category: "Social Creatives",
    tag: "Social Media · Design",
    file: social1, // png/jpg
  },
  {
    id: 2,
    title: "Personal Portfolio Website UI",
    category: "Web Designs",
    tag: "UI/UX · Web",
    file: web1, // png/jpg
  },
  {
    id: 3,
    title: "Election Campaign Poster",
    category: "Political Posters",
    tag: "Campaign · Poster · Print",
    file: posterPdf, // pdf
  },

  {
    id: 4,
    title: "Pay Slip",
    category: "Political Posters",
    tag: "PDF",
    file: postPdf,
  }
  // ➕ Add more:
  // {
  //   id: 4,
  //   title: "Brand Board for Cafe Bliss",
  //   category: "Brand Board",
  //   tag: "Logo · Palette · Typography",
  //   file: brandBoardFile, // jpg / png / pdf
  // },
];

// Individual tilt card component
const TiltCard = ({ item, onClick }) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = (-y * 10).toFixed(2); // max 10deg
    const rotateY = (x * 10).toFixed(2);

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
      boxShadow: "0 18px 30px rgba(15,23,42,0.18)",
    });
  };

  const handleMouseLeave = () => {
    setStyle({});
  };

  const fileSrc = item.file;
  const isPdf = fileSrc.toLowerCase().endsWith(".pdf");

  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tilt-card bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:border-black/40 hover:bg-white/90 text-left cursor-pointer fade-in-section"
      style={style}
    >
      {/* Thumbnail */}
      <div className="h-44 sm:h-52 bg-gray-200 overflow-hidden flex items-center justify-center">
        {isPdf ? (
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl mb-2">📄</span>
            <span className="text-xs font-semibold text-gray-800">
              PDF Design
            </span>
            <span className="text-[11px] text-gray-500 mt-1">
              Click to preview
            </span>
          </div>
        ) : (
          <img
            src={fileSrc}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 flex-1 flex flex-col">
        <span className="inline-flex text-[11px] font-medium px-3 py-1 rounded-full bg-[#eef6ff] text-gray-700 w-fit">
          ✦ {item.category}
        </span>
        <h3 className="text-sm sm:text-base font-semibold text-gray-900">
          {item.title}
        </h3>
        {item.tag && (
          <p className="text-[11px] text-gray-500 mt-1">{item.tag}</p>
        )}
        <span className="mt-auto text-[11px] text-gray-500">
          Click to view larger
        </span>
      </div>
    </button>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);

  const filteredWorks = useMemo(() => {
    if (activeCategory === "All") return allWorks;
    return allWorks.filter((work) => work.category === activeCategory);
  }, [activeCategory]);

  const openPreview = (work) => {
    setSelectedWork(work);
  };

  const closePreview = () => {
    setSelectedWork(null);
  };

  return (
    <section className="bg-[#eef6ff] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Heading */}
        <div className="text-center mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Creative Space
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            A curated collection of my designs across social media, web, print,
            political campaigns, and branding. Use the filters to explore
            different categories of my work.
          </p>
        </div>

        {/* Sub-navbar Filters */}
        <div className="w-full">
          <div className="flex items-center justify-center">
            <div className="inline-flex max-w-full overflow-x-auto whitespace-nowrap rounded-full bg-white/80 border border-gray-200 px-2 py-2 gap-2 shadow-sm">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-150 shrink-0 ${
                      isActive
                        ? "bg-black text-white shadow-md"
                        : "bg-transparent text-gray-700 hover:bg-black/5"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Works Grid */}
        {filteredWorks.length === 0 ? (
          <p className="text-center text-gray-500 text-sm mt-8">
            No designs added yet for{" "}
            <span className="font-semibold">{activeCategory}</span>.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {filteredWorks.map((item) => (
              <TiltCard key={item.id} item={item} onClick={openPreview} />
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          onClick={closePreview}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-[95vw] max-h-[85vh] p-4 sm:p-6 shadow-xl flex flex-col modal-fade"
            onClick={(e) => e.stopPropagation()} // don't close if clicking inside
            onContextMenu={(e) => e.preventDefault()} // light protection
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {selectedWork.title}
                </h3>
                <p className="text-[11px] text-gray-500">
                  {selectedWork.category}
                  {selectedWork.tag ? ` · ${selectedWork.tag}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={closePreview}
                className="text-gray-500 hover:text-black text-lg px-2"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              {(() => {
                const fileSrc =
                  selectedWork.file || selectedWork.image || "";
                const isPdf = fileSrc.toLowerCase().endsWith(".pdf");

                if (isPdf) {
                  return (
                    <iframe
                      src={fileSrc}
                      title={selectedWork.title}
                      className="w-full h-[70vh] rounded-lg border border-gray-200"
                    />
                  );
                }

                return (
                  <img
                    src={fileSrc}
                    alt={selectedWork.title}
                    className="max-h-[70vh] w-auto rounded-lg object-contain"
                    loading="lazy"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                );
              })()}
            </div>

            <p className="mt-2 text-[11px] text-gray-400 text-center">
              Preview only. Download option is not provided.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
