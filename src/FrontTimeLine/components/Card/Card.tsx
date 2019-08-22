import * as React from "react";
import "../../../styles.css";
import Favorites from "./Favorites";

const Card = props => {
  return (
    <div className="Card">
      <div className="CardItemName">Summer Tees</div>
      <div className="CardCurrentPrice">200 Egp</div>
      <div className="CardMoreColors">
        <div className="CardMoreColorsText">More Colors</div>
      </div>
      <div className="CardLikesBox">
        <Favorites />
        <div className="CardLikesCounter">350</div>
      </div>
    </div>
  );
};

export default Card;
