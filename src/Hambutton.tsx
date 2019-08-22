// making the hambutton
import * as React from "react";
import "./styles.css";

const Hambutton = () => {
  return (
    <div className="hamButton">
      <svg
        width="24"
        height="15"
        viewBox="0 0 24 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="24" y2="0.5" stroke="black" />
        <line y1="14.5" x2="24" y2="14.5" stroke="black" />
        <line y1="6.94434" x2="24" y2="6.94434" stroke="black" />
      </svg>
    </div>
  );
};

export default Hambutton;
