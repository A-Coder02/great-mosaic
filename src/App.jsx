import React from "react";
import "./App.css";
import Mosaic from "./components/Mosaic";

import images from "./images.json";

const ROWS = 4;

const App = () => {
  return (
    <div>
      <Mosaic images={[...images,...images]} size={ROWS} />
    </div>
  );
};

export default App;
