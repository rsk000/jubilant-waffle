// src/ZoomableImage.js
import React, { useState } from 'react';
import './ZoomableImage.css';

function ZoomableImage({ src }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleDoubleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="image-container" onDoubleClick={handleDoubleClick}>
      <img src={src} alt="" className={`image ${isZoomed ? 'zoomed' : ''}`} />
    </div>
  );
}

export default ZoomableImage;
