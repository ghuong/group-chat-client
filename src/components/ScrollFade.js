import React from "react";

import styles from "./css/ScrollFade.module.css";

const ScrollFade = ({ children, r = 255, g = 255, b = 255 }) => {
  // const direction = isBottom ? "bottom" : "top";
  // const fadeClass = isBottom ? styles.fade_out : styles.fade_in;

  const fadeStyle = (direction) => ({
    backgroundImage: `linear-gradient(to ${direction}, rgba(${r}, ${g}, ${b}, 0), rgba(${r}, ${g}, ${b}, 0.9) 100%)`,
  });

  return (
    <>
      <div className={styles.fade_in} style={fadeStyle("top")} />
      {children}
      <div className={styles.fade_out} style={fadeStyle("bottom")} />
    </>
  );
};

export default ScrollFade;
