import React, { useEffect, useState } from "react";

// import SampleImage from "../../sample-image.png";
import MosaicPixel from "./MosaicPixel";
const SampleImage = 'https://pronttera.com/static/media/logo.088cf799a4cd220295eb.png'


const CELL_SIZE = 60; // pixel size of each square

const Mosaic = ({ images = [], size: defaultSize = 14 }) => {
  const [size, setSize] = useState(defaultSize);

  useEffect(() => {
    if (defaultSize > 0) setSize(defaultSize);
  }, [defaultSize]);

  useEffect(() => {
    const numberOfCells = size * size;
    if (numberOfCells < images.length) {
      const newSize = Math.ceil(Math.sqrt(images.length));
      if (newSize !== size) setSize(newSize);
    }
  }, [images.length, size]);

  let numberOfRows = size;
  let numberOfColumns = size;
  // todo: if number of row increment necessary then incementet

  return (
    <div
      className="mosaic-grid-wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
        backgroundColor: "#f9f9f9",
        backgroundImage: `url(${SampleImage})`,
        position: "relative",
        // width: "fit-content",
        // height: "fit-content",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "grayscale(1)",
          WebkitBackdropFilter: "grayscale(1)", // for Safari
          backgroundColor: "rgba(255, 255, 255, 0.2)", // required for backdrop to take effect
        }}
      />

      {images.map((img) => (
        <MosaicPixel image={img} />
      ))}
    </div>
  );
};

export default Mosaic;
