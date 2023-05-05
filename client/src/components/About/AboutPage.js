import styles from "./AboutPage.module.css";
// import Image from "../Gallery/beach.jpeg";

const WelcomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.AboutTitle}>
          <h1 className={styles.aboutH1}>About Me</h1>
        </div>
        <div className={styles.aboutGrid}>
          {/* <div className={styles.aboutImage}>
            <img className={styles.cardImage} src={Image} alt="placeholder" />
          </div> */}
          <div className={styles.aboutText}>
            <p className={styles.textHighlight}>
              I am a fitness trainer who's passionate about helping people
              achieve their health and fitness goals.
            </p>
            <p className={styles.textLow}>
              I've worked with students and professionals over the past seven
              years. Weight training and cardio workouts are my main areas of
              expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
