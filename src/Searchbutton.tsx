import * as React from "react";
import MediaQuery from "react-responsive";
import SearchMenu from "./SearchMenu";

const Searchbutton = (props) => {
  return (
    <div className="SearchBox" onClick = {props.onClick}>
      <p className="SearchWord">Search..</p>
    </div>
  );
};

export default Searchbutton;
