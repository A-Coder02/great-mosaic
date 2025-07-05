import React, { useEffect, useState } from "react";

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
        gap: "2px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
        // width: "fit-content",
        // height: "fit-content",
      }}
    >
      {images.map((img) => (
        <div
          key={img.id}
          style={{
            aspectRatio: 1,
            // width: "100%",
            // height: "100%",
            backgroundImage: `url(${img.link})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
};

export default Mosaic;
