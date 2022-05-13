import React from "react";

import css from "./css/ScrollBox.module.css";

const ScrollFade = ({ children, bgColor = "#ffffff" }) => {
  const fadeStyle = (direction) => ({
    backgroundImage: `linear-gradient(to ${direction}, ${bgColor}00, ${bgColor}ff)`,
  });

  return (
    <div className={css.fade_container}>
      <div className={css.fade_in} style={fadeStyle("top")} />
      <div className={css.scroll_container}>
        <div className={css.fade_buffer} />
        {children}
        <div className={css.fade_buffer} />
      </div>
      <div className={css.fade_out} style={fadeStyle("bottom")} />
    </div>
  );
};

export default ScrollFade;
