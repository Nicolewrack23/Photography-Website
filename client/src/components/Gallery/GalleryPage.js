import styles from "./GalleryPage.module.css";
import image from "./imageplaceholder.png";

const WelcomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.galleryH1}>Gallery</h1>
        <div className={styles.images}>
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <img className={styles.galleryImages} src={image} alt="placeholder" />
          <img className={styles.galleryImages} src={image} alt="placeholder" />
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
