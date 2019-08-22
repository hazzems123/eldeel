import React from "react";
import "../styles.css";
import TimeLine from "../FrontTimeLine/BelowTimeLine";

const Belowfold = props => {
  return (
    <div className="Belowfold">
      <div
        style={{
          display: "flex",
          width: window.innerWidth,
          height: window.innerHeight
        }}
      >
        <TimeLine />
      </div>
    </div>
  );
};

export default Belowfold;
