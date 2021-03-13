import React from "react";

import styles from "./css/ScrollBox.module.css";

const ScrollFade = ({ children, bgColor = "#ffffff" }) => {
  const fadeStyle = (direction) => ({
    backgroundImage: `linear-gradient(to ${direction}, ${bgColor}00, ${bgColor}ff)`,
  });

  return (
    <div className={styles.fade_container}>
      <div className={styles.fade_in} style={fadeStyle("top")} />
      <div className={styles.scroll_container}>
        <div className={styles.fade_buffer} />
        {children}
        <div className={styles.fade_buffer} />
      </div>
      <div className={styles.fade_out} style={fadeStyle("bottom")} />
    </div>
  );
};

export default ScrollFade;
