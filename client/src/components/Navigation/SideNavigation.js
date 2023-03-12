import React, { useState } from "react";
import styles from "./SideNavigation.module.css";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.menuButton}>
        <div className={styles.nameGrid}>
          <h1 className={styles.name}>add name</h1>
        </div>
        <div className={styles.buttonGrid}>
          <button className={styles.buttonStyles} onClick={toggleMenu}>
            {isOpen ? "x" : "☰"}{" "}
          </button>
        </div>
        <div
          className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}
          onClick={toggleMenu}
        >
          <ul className={styles.grid}>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>About</li>
            <li className={styles.menuItem}>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
