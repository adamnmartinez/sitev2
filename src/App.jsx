import { useState } from "react";
import NamePlate from "./components/NamePlate";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div id="appWrapper">
      <div id="flexcontainer">
        <div className="leftContainer">
          <NamePlate />
          <Skills />
        </div>
        <div className="rightContainer">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
