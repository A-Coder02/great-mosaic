import React, { useEffect, useState } from "react";
import MosaicPixel from "./MosaicPixel";

const Mosaic = ({
  images = [],
  size: defaultSize = 14,
  bgImageUrl = null,
  gridWrapperClassName = null,
  gridWrapperStyle = {},
  width = 300,
  height = 300,
}) => {
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
      className={`mosaic-grid-wrapper ${
        gridWrapperClassName ? gridWrapperClassName : ""
      }`}
      style={{
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: `${width}px ${height}px`,
        width: `${width}px`,
        height: `${height}px`,
        ...gridWrapperStyle,
      }}
    >
      <div className="mosaic-grid-wrapper-overlay" />

      {images.map((img) => (
        <MosaicPixel
          image={img}
          bgImageUrl={bgImageUrl}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
};

export default Mosaic;
