import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";

import "./css/products.css";

function SubMenu() {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.pathname
    .split("/")[2]
    .toLocaleLowerCase()
    .replace(/%20/g, "_");
  const categories = useSelector(
    (store) => store.category.subCategories[category]
  );

  return (
    <div className="list">
      <div className="submenu">
        {categories.map((cat) => (
          <div
            key={cat}
            className="submenu-item"
            onClick={() =>
              navigate(
                `/products/${location.pathname.split("/")[2]}/${cat
                  .toLocaleLowerCase()
                  .replace(/_/g, "%20")}`
              )
            }
          >
            <p>{cat.toUpperCase().replace(/_/g, " ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showFilters, setShowFilters] = useState(window.innerWidth >= 768);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="products-wrapper">
      {location.pathname.split("/")[1] === "products" &&
      location.pathname.split("/").length === 3 ? (
        <SubMenu />
      ) : null}
      <div className="products-container">
        {window.innerWidth <= 768 ? (
          <button className="filter-button" onClick={toggleFilters}>
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        ) : null}
        <div className={`filters ${showFilters ? "open" : ""}`}>
          <Filters />
        </div>
        <div className="list">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
