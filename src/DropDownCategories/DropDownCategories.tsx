import * as React from "react";
import { useState } from "react";
import "../styles.css";
import DropDownBox from "./DropDownBox";
import DropDownArrow from "./DropDownArrow";
import DropDownList from "./DropDownList/DropDownList";
import Belowfold from "../Belowfold/Belowfold";

const DropDownCategories = props => {
  const [Menustatus, setMenustatus] = useState("false");

  return (
    <div className="DropDownCategories">
      {Menustatus === "false" ? (
        <div>
          <DropDownBox />
          {props.hideTimeline("")}
          <DropDownArrow onClick={() => setMenustatus("true")} />
        </div>
      ) : (
        <div>
          {props.hideTimeline("true")}
          <DropDownList onClick={() => setMenustatus("false")} />
        </div>
      )}
    </div>
  );
};
export default DropDownCategories;
