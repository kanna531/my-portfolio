// src/Home.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "portfolio", "services", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#eef6ff] overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="mt-4 space-y-10 md:space-y-16">
        <section id="home" className="scroll-mt-24">
          <Hero onNavClick={handleNavClick} />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="portfolio" className="scroll-mt-24">
          <Portfolio />
        </section>

        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer onNavClick={handleNavClick} />
    </div>
  );
};

export default Home;
