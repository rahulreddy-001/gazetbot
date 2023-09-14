import React, { useState, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Card from "./Card";
import "./css/top.css";

function Row({ title, products }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    const newPosition = scrollPosition - container.offsetWidth;
    container.scrollLeft = newPosition;
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    const newPosition = scrollPosition + container.offsetWidth;
    container.scrollLeft = newPosition;
    setScrollPosition(newPosition);
  };

  return (
    <div>
      <div className="top-row-title">{title}</div>
      <div className="top-container">
        <button className="arrow left-arrow" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="top-scroll" ref={scrollContainerRef}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <button className="arrow right-arrow" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

function Top() {
  const topProducts = useSelector((state) => state.topProducts.products);

  return (
    <div>
      {topProducts.map((top) => (
        <Row key={top.id} title={top.title} products={top.products} />
      ))}
    </div>
  );
}

export default Top;
