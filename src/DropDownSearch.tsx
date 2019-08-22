import * as React from "react";
import { Button } from "react-bootstrap";
import Categories from "./Categories";
import "./styles.css";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const DropDownSearch = () => {
  return (
    <div className="DropdownMenu">
      <Categories />
    </div>
  );
};
export default DropDownSearch;
