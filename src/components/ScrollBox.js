import React from "react";

import styles from "./css/ScrollBox.module.css";

const ScrollFade = ({ children, backgroundColorSixCharHex = "#ffffff" }) => {
  const fadeStyle = (direction) => ({
    backgroundImage: `linear-gradient(to ${direction}, ${backgroundColorSixCharHex}00, ${backgroundColorSixCharHex}ff)`,
  });

  return (
    <div className={styles.fade_container}>
      <div className={styles.fade_in} style={fadeStyle("top")} />
      <div className={styles.scroll_container}>{children}</div>
      <div className={styles.fade_out} style={fadeStyle("bottom")} />
    </div>
  );
};

export default ScrollFade;
