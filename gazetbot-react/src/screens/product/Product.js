import React from "react";
import "./product.css";
import itemData from "./data.js";

const Product = () => {
  const [data, setData] = React.useState(itemData);

  if (!data.images) {
    return null;
  }

  return (
    <div className="product-item">
      <div className="product-images">
        {data.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>
      <div className="product-details">
        <h1>{data.name}</h1>
        <div className="product-prices">
          <h2>Prices</h2>
          {data.price.map((price, index) => (
            <div key={index}>
              <p className="price-platform">{price.platform}</p>
              <p className="price-value">₹{price.price}</p>
            </div>
          ))}
        </div>
        <p className="product-description">{data.description}</p>
        <div className="product-specs">
          <h2>Specifications</h2>
          {data.specifications.map((section, index) => (
            <div key={index}>
              <h3>{section.type}</h3>
              <ul>
                {section.specs.map((spec, index) => (
                  <li key={index}>
                    <strong>{spec.name}:</strong> {spec.value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
