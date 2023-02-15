import React, { useState } from "react";
import sideStyles from "./SideNavigation.module.css";

const NavigationTopMenu = () => {
  const [icon, setIcon] = useState(sideStyles.icon);

  const handleClick = () => {
    if (icon === sideStyles.icon) {
      const change = sideStyles.change;

      return setIcon(change);
    } else {
      const icon = sideStyles.icon;
      return setIcon(icon);
    }
  };

  return (
    <>
      <div className={sideStyles.responsive}>
        <h2>Nicole's work</h2>
        <div className={icon} onClick={handleClick}>
          <div className={sideStyles.bar1}></div>
          <div className={sideStyles.bar2}></div>
          <div className={sideStyles.bar3}></div>
        </div>
      </div>

      <div className={icon}>
        <div className={sideStyles.sideMenu}>
          <p className={sideStyles.hello}>hello</p>
          <p className={sideStyles.hello}>hello</p>
          <p className={sideStyles.hello}>hello</p>
        </div>
      </div>
    </>
  );
};
export default NavigationTopMenu;
