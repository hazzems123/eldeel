import React from "react";
import Media from "react-media";
import Mainbar from "./Mainbar";
import Minibar from "./Minibar";

const Topfold = props => {
  return (
    <div className="topFold">
      <Media query="(max-width: 900px)">
        {matches =>
          matches ? <Minibar hideTimeline={props.hideTimeline} /> : <Mainbar />
        }
      </Media>
    </div>
  );
};

export default Topfold;
