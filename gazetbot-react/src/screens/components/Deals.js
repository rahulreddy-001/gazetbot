import React, { useRef } from "react";
import "./css/deals.css";

import { useNavigate } from "react-router-dom";

import ac from "../../assets/images/deals/ac.png";
import accessories from "../../assets/images/deals/accessories.png";
import appliances from "../../assets/images/deals/appliances.png";
import home_appliances from "../../assets/images/deals/home_appliances.png";
import kitchen_appliances from "../../assets/images/deals/kitchen_appliances.png";
import laptops_tablets from "../../assets/images/deals/laptops_tablets.png";
import self_care from "../../assets/images/deals/self_care.png";
import televisions from "../../assets/images/deals/televisions.png";

const Deals = () => {
  const navigate = useNavigate();

  const deals = [
    { id: 1, image: ac, name: "ACs" },
    { id: 2, image: accessories, name: "Accessories" },
    { id: 3, image: appliances, name: "Appliances" },
    { id: 4, image: home_appliances, name: "Home Appliances" },
    { id: 5, image: kitchen_appliances, name: "Kitchen Appliances" },
    { id: 6, image: laptops_tablets, name: "Laptops & Tablets" },
    { id: 7, image: self_care, name: "Self Care" },
    { id: 8, image: televisions, name: "Televisions" },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 500;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 500;
    }
  };

  return (
    <>
      <div className="deals-title">Top Deals</div>
      <div className="deals-container">
        <button className="arrow left-arrow" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="deals-scroll" ref={scrollRef}>
          {deals.map((deal) => (
            <div key={deal.id} className="deal-item">
              <img src={deal.image} alt={deal.name} />
              <p>{deal.name}</p>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </>
  );
};

export default Deals;
