import React from "react";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcomeComponents}>
        <h1 className={styles.welcomeH1}>Welcome to the Photography Website</h1>
        <p className={styles.welcomeP}>
          Explore the captivating world of photography captured through our
          lens. Witness breathtaking moments frozen in time.
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={scrollToGallery}>
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
