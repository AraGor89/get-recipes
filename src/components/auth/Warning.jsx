import React from "react";
import style from "./auth.module.scss";

function Warning() {
  return (
    <div className={style.warningContainer}>
      <h2>WRONG LOGIN OR PASSWORD</h2>
    </div>
  );
}

export default Warning;
