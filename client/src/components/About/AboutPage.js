import React from "react";
import styles from "./AboutPage.module.css";
import camera from "../Photos/camera.svg";
import Image from "../Photos/photo.jpeg";

const AboutPage = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.textPortion}>
          <div className={styles.heading}>
            <img className={styles.camera} src={camera} alt="camera" />
            <h1 className={styles.aboutH1}>About Me</h1>
          </div>
          <p className={styles.textHighlight}>
            I am a fitness trainer who's passionate about helping people achieve
            their health and fitness goals.
          </p>
          <p className={styles.textLow}>
            I've worked with students and professionals over the past seven
            years. Weight training and cardio workouts are my main areas of
            expertise.
          </p>
          <button className={styles.button} onClick={scrollToContact}>
            CONTACT ME
          </button>
        </div>
        <div className={styles.aboutImage}>
          <img className={styles.image} src={Image} alt="placeholder" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
