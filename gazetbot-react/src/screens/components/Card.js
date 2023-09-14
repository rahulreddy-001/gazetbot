import React, { useState } from "react";
import "./css/card.css";
import p1 from "../../assets/images/products/mobiles/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const [isWishlist, setIsWishlist] = useState(false);

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="wishlist-button" onClick={toggleWishlist}>
        <FontAwesomeIcon
          icon={false ? faHeartSolid : faHeartRegular}
          className="heart-icon-card"
        />
      </div>
      <div className="card-image">
        <img src={p1} alt={product.name} />
      </div>
      <div className="card-content">
        <div className="card-title">{product.name}</div>
        <div className="card-price">₹{product.price}</div>
        <div className="card-offer">10% OFF</div>
      </div>
    </div>
  );
};

export default Card;
