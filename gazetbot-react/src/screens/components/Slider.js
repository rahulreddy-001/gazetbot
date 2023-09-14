import React, { useState, useEffect } from "react";
import "./css/slider.css";

import a1 from "../../assets/temp/a1.png";
import a2 from "../../assets/temp/a2.png";
import a3 from "../../assets/temp/a3.png";

const Slider = () => {
  const images = [a1, a2, a3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  useEffect(() => {
    if (isAutoSliding) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isAutoSliding]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoSliding(true);
  };

  return (
    <div className="slider">
      <div
        className="slider_container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="slider_item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider_dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`slider_dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
