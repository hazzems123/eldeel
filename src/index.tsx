import * as React from "react";
import { render } from "react-dom";
import Topfold from "./Topfold";
import Belowfold from "./Belowfold/BelowfoldView";
import { useState } from "react";

import "./styles.css";

function App() {
  const [Status, setStatus] = useState("");
  return (
    <div className="App">
      <Topfold hideTimeline={setStatus} />
      {Status === "true" ? <div /> : <Belowfold />}
    </div>
  );
}
export default App;
const rootElement = document.getElementById("root");
render(<App />, rootElement);
