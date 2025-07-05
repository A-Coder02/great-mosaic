import React from "react";
import "./App.css";
import Mosaic from "./components/Mosaic";

const ROWS = 20;

const images = Array.from({ length: 400 }, (_, i) => ({
  id: i + 1,
  link: `https://picsum.photos/id/${101 + i}/400/300`,
}));

const SampleImage =
  "https://pronttera.com/static/media/logo.088cf799a4cd220295eb.png";

const App = () => {
  return (
    <div>
      <Mosaic
        images={images}
        size={ROWS}
        bgImageUrl={SampleImage}
        // Grid Wrapper custom classNames
        gridWrapperClassName="custom-mosaic-grid-wrapper"
        // Grid Wrapper custom style
        gridWrapperStyle={{
          boxShadow: '0 0 1em rgba(255,255,255,0.5)'
        }}
        width={300}
        height={300}
      />
    </div>
  );
};

export default App;
