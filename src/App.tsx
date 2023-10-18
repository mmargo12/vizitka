import React from "react";
import "./App.css";
import { HeaderLayer } from "./widgets/HeaderLayer";
import { InfoLayer } from "./widgets/InfoLayer";
import { Projects } from "./widgets/Projects";
import { Contacts } from "./widgets/Contacts";

function App() {
  return (
    <div className="App">
      <HeaderLayer/>
      <InfoLayer/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
