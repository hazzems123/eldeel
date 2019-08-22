import * as React from "react";
import { useState } from "react";
import "../styles.css";

const DropDownArrow = props => {
  return (
    <button className="DropDownArrow">
      <svg
        width="40"
        height="20"
        viewBox="0 14 47 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={props.onClick}
      >
        <path
          d="M0.999969 1.14192L23.3827 26.3591L45.6044 0.999834"
          stroke="black"
        />
      </svg>
    </button>
  );
};

export default DropDownArrow;
