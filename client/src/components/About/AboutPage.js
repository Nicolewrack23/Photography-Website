import styles from "./AboutPage.module.css";
import image from "../Photos/photo.jpeg";

const WelcomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcomeComponents}>
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <p className={styles.welcomeH1}>Hi there, I am</p>
          <h1 className={styles.welcomeH1}>Nicole Wrack</h1>
          <p className={styles.welcomeH1}>Software Developer</p>
          <p className={styles.welcomeP}>
            A quick bit about my self, The quick brown fox jumps over the lazy
            dogs The quick brown fox jumped over the lazy dogs
          </p>
          <button>Click Me</button>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
