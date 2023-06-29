import React, { useState, useEffect } from "react";
import styles from "./SideNavigation.module.css";
import Welcome from "../Welcome/WelcomePage";
import Gallery from "../Gallery/GalleryPage";
import About from "../About/AboutPage";
import Contact from "../Contact/ContactPage";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["welcome", "gallery", "about", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.5
          );
        }
        return false;
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.menuButton}>
          <div className={styles.nameGrid}>
            <h1 className={styles.name}>add name</h1>
          </div>
          <div className={styles.buttonGrid}>
            <button className={styles.buttonStyles} onClick={toggleMenu}>
              {isOpen ? "x" : "☰"}
            </button>
          </div>
          <div
            className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}
            onClick={toggleMenu}
          >
            <div className={styles.leftAlign}>
              <ul className={styles.grid}>
                <li
                  className={`${styles.menuItem} ${
                    activeSection === "welcome" ? styles.active : ""
                  }`}
                  onClick={() => scrollToSection("welcome")}
                >
                  Home
                </li>
                <li
                  className={`${styles.menuItem} ${
                    activeSection === "gallery" ? styles.active : ""
                  }`}
                  onClick={() => scrollToSection("gallery")}
                >
                  Gallery
                </li>
                <li
                  className={`${styles.menuItem} ${
                    activeSection === "about" ? styles.active : ""
                  }`}
                  onClick={() => scrollToSection("about")}
                >
                  About
                </li>
                <li
                  className={`${styles.menuItem} ${
                    activeSection === "contact" ? styles.active : ""
                  }`}
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="welcome">
        <Welcome />
      </div>
      <div id="gallery">
        <Gallery />
      </div>

      <div className={styles.gradient}>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default SideMenu;
