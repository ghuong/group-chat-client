import React from "react";

import styles from "./css/ScrollBox.module.css";

/**
 * 
 * @param {String} bgColor 6 character hex code for background color, e.g. #f8f8f8 
 * @returns 
 */
const ScrollBox = ({ children, bgColor = "#ffffff" }) => {
  const fadeStyle = (direction) => ({
    backgroundImage: `linear-gradient(to ${direction}, ${bgColor}00, ${bgColor}ff)`,
  });

  return (
    <div className={styles.fade_container}>
      <div className={styles.fade_in} style={fadeStyle("top")} />
      <div className={styles.scroll_container}>{children}</div>
      <div className={styles.fade_out} style={fadeStyle("bottom")} />
    </div>
  );
};

export default ScrollBox;
