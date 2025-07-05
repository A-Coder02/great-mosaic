import React, { useEffect, useRef, useState } from "react";

const MosaicPixel = ({
  image,
  bgImageUrl,
  width,
  height,
  bgPosition,
  onClickHandler = () => {},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const pixelRef = useRef();

  useEffect(()=>{
    console.log(pixelRef.current)
  },[])

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
          ref={pixelRef}
          className="mosaic-cell"
          onClick={() => onClickHandler(image, pixelRef.current.getBoundingClientRect())}
          style={{
            backgroundImage: `url(${bgImageUrl})`,
            backgroundSize: `${width}px ${height}px`,
            backgroundPosition: bgPosition,
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
};

export default MosaicPixel;
