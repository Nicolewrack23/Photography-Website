import styles from "./GalleryPage.module.css";
import image from "./beach.jpeg";
import skyImage from "./sky.jpeg";

const WelcomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.images}>
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <img
            className={styles.galleryImages}
            src={skyImage}
            alt="placeholder"
          />
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <img
            className={styles.galleryImages}
            src={skyImage}
            alt="placeholder"
          />
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <img
            className={styles.galleryImages}
            src={skyImage}
            alt="placeholder"
          />
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <img
            className={styles.galleryImages}
            src={skyImage}
            alt="placeholder"
          />
          <img className={styles.galleryImages} src={image} alt="placeholder" />
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
