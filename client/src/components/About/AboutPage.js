import styles from "./AboutPage.module.css";
import image from "../Photos/photo.jpeg";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <img className={styles.cardImage} src={image} alt="placeholder" />

          <div className={styles.textStyling}>
            <p>Hi there, I am</p>
            <h1 className={styles.heading}>Nicole Wrack</h1>
            <p>Software Developer</p>
            <p>
              A quick bit about my self, The quick brown fox jumps over the lazy
              dogs The quick brown fox jumped over the lazy dogs
            </p>
            <button>Click Me</button>
            <div>
              <FaInstagram className={styles.icons} />
              <FaFacebookF className={styles.icons} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
