import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "./GalleryPage.module.css";
import image1 from "./Images/Image1.jpeg";
import ImageContainerArt from "./Images/ImageContainerArt.jpeg";
import ImageBlueCar from "./Images/ImageBlueCar.jpeg";
import ImageMainfreight from "./Images/ImageMainfreight.jpeg";
import ImagePeacock from "./Images/ImagePeacock.jpeg";
import ImageHelmet from "./Images/ImageHelmet.jpeg";
import ImagePaintball from "./Images/ImagePaintball.jpeg";
import ImagePlaneWheel from "./Images/ImagePlaneWheel.jpeg";
import ImageAirNZPlane from "./Images/ImageAirNZPlane.jpeg";

const GalleryPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const images = [
    ImageBlueCar,
    ImageContainerArt,
    ImageMainfreight,
    ImagePeacock,
    ImageHelmet,
    ImagePaintball,
    ImagePlaneWheel,
    ImageAirNZPlane,
    image1,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.galleryImagesContainer}>
        <div className={styles.images}>
          {images.map((imgSrc, index) => (
            <img
              key={index}
              className={`${styles.galleryImages} ${
                index === currentImageIndex ? styles.active : ""
              }`}
              src={imgSrc}
              alt="placeholder"
            />
          ))}
        </div>
      </div>
      <div className={styles.mobileGalleryImageContainer}>
        <div className={styles.mobileImages}>
          <img
            className={styles.galleryImages}
            src={images[currentImageIndex]}
            alt="placeholder"
            onClick={nextImage}
          />
        </div>

        {images.length > 1 && (
          <div className={styles.slideshowControls}>
            <button className={styles.prevButton} onClick={previousImage}>
              <AiOutlineLeft fontSize={24} />
            </button>
            <button className={styles.nextButton} onClick={nextImage}>
              <AiOutlineRight fontSize={24} />
            </button>
          </div>
        )}
        {/* Add dots */}
        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                index === currentImageIndex ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
