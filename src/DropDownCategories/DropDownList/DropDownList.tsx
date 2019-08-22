import * as React from "react";
import { useState } from "react";
import SearchIcon from "./SearchIcon";
import CancelButton from "./CancelButton"
import InputBase from '@material-ui/core/InputBase';
import "../../styles.css";

const DropDownList = (props) => {
  return (
    
<div className ="DropDownList">
  <div className="DropDownListBar">
    
    < div >
      <SearchIcon />
      <InputBase autoFocus />
    </div>
    <div onClick = {props.onClick}><CancelButton/>
  
     </div>
    
  </div>
  <div className = "DropDownListCategories">
        <div> <button className = "DropDownListButton">women </button> </div>
        <div> <button className = "DropDownListButton">Men </button> </div>
        <div> <button className = "DropDownListButton">Toys </button> </div>
        <div> <button className = "DropDownListButton">Home </button> </div>
        <div> <button className = "DropDownListButton" >Lifestyle </button> </div>
        <div> <button className = "DropDownListButton">Shoes</button> </div>
        <div> <button className = "DropDownListButton">Pets </button> </div>
        <div> <button className = "DropDownListButton">Kids </button> </div>
        <div> <button className = "DropDownListButton">Ending Soon</button> </div>
       

  </div>  


</div>
  );
};
export default DropDownList;

