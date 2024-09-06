import { useEffect, useState } from "react";
import Header from "./components/Header";
import BackgroundBlur from "./components/BackgroundBlur";
import Home from "./components/Home/Home";
import ParticlesComponent from "./components/ParticlesComponent";
import CustomCursor from "./components/CustomCursor";

import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

import Contact from "./components/Contact/Contact";

import "./styles/app.scss";

function App() {
  const [activeSection, setActiveSection] = useState<string>("Home");

  const handleScroll = () => {
    const sections = ["Home", "Skills", "Projects", "Contact"];
    const scrollY = window.scrollY; // Current scroll position
    const windowHeight = window.innerHeight; // Height of the viewport

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { offsetTop, offsetHeight } = sectionElement;
        const sectionBottom = offsetTop + offsetHeight; // Bottom of the section

        // Check if the current scroll position is within the section's range
        if (
          scrollY + windowHeight * 0.6 >= offsetTop &&
          scrollY < sectionBottom
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <BackgroundBlur />
      <CustomCursor />
      <ParticlesComponent />
      <Header activeSection={activeSection} />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
