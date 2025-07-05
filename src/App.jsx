import React from "react";
import "./App.css";
import Mosaic from "./components/Mosaic";


const ROWS = 20;


const images = Array.from({ length: 400 }, (_, i) => ({
  id: i + 1,
  link: `https://picsum.photos/id/${101 + i}/400/300`
}));
const App = () => {
  return (
    <div>
      <Mosaic images={images} size={ROWS} />
    </div>
  );
};

export default App;
