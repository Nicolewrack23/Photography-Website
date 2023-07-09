import React from "react";
import styles from "./WelcomePage.module.css";
import { AiOutlineDown } from "react-icons/ai";

const WelcomePage = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcomeComponents}>
          <h1 className={styles.welcomeH1}>Welcome to Jay's Photography</h1>
          <p className={styles.welcomeP}>
            Through My Lens, I Capture the Essence of Your Cars and the Joy in
            Family Shoots, Creating Timeless Images
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.bouncingButton}`}
            onClick={scrollToGallery}
          >
            <AiOutlineDown fontSize={32} />
          </button>
          <p className={styles.galleryText}>View Gallery</p>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
