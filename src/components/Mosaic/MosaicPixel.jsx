import React, { useEffect, useState } from "react";

const MosaicPixel = ({ image, bgImageUrl, width, height, bgPosition }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!image?.link) return;
    const img = new Image();
    img.src = image.link;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(false); // optional
  }, [image]);

  return (
    <div key={image.id} className={`mosaic-cell-wrapper`}>
      {!isLoaded ? null : (
        <div
          className="mosaic-cell"
          style={{
            backgroundImage: `url(${bgImageUrl})`,
            backgroundSize: `${width}px ${height}px`,
            backgroundPosition: bgPosition
          }}
        >
          <div
            className="mosaic-cell-img"
            style={{
              backgroundImage: `url(${image.link})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      )}
    </div>
  );
  return (
    <div
      style={{
        aspectRatio: 1,
        backgroundImage: `url(${image.link}), url(${SampleImage})`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundBlendMode: "multiply",
        position: "relative",
        zIndex: 2,
        opacity: 0.9,
      }}
    />
  );
};

export default MosaicPixel;
