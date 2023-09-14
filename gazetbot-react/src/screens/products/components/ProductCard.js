import React, { useState } from "react";
import "./css/card.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const { id, name, price, rating, discount, brand, image } = product;
  const [isWishlist, setIsWishlist] = useState(false);

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-brand">{brand}</p>
        <div className="product-price">
          <span className="original-price">₹{price}</span>
          <span className="discount">{discount}% off</span>
        </div>
        <div className="product-rating">
          <span className="rating">{rating}</span>
          <i className="fa fa-star"></i>
        </div>
      </div>
      <button
        className={`wishlist-button ${isWishlist ? "active" : ""}`}
        onClick={toggleWishlist}
      >
        <i className="fa fa-heart"></i>
      </button>
    </div>
  );
}
