import React, { useState } from "react";
import styles from "./SideNavigation.module.css";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isOpen ? "Close" : "Open"} Menu
      </button>
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
    </>
  );
};

export default SideMenu;
