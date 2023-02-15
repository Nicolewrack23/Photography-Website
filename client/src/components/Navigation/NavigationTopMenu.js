import React, { useState } from "react";
import styles from "./NavigationTopMenu.module.css";

const NavigationTopMenu = () => {
  const [icon, setIcon] = useState(styles.icon);
  const handleClick = () => {
    if (icon === styles.icon) {
      const change = styles.change;
      return setIcon(change);
    } else {
      const icon = styles.icon;
      return setIcon(icon);
    }
  };

  return (
    <>
      <div className={styles.responsive}>
        <h2>Nicole's work</h2>
        <div className={icon} onClick={handleClick}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </div>
    </>
  );
};
export default NavigationTopMenu;
