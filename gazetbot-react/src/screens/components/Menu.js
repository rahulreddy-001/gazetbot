import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../store/categorySlice";
import { useNavigate } from "react-router-dom";

import "./css/menu.css";

function Category({ image, title }) {
  const navigate = useNavigate();
  return (
    <div
      className="category"
      onClick={() => {
        navigate(`/products/${title.toLowerCase().replace(/%20/g, " ")}`);
      }}
    >
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

function Menu() {
  let [categoryImages, setCategoryImages] = React.useState({});
  let categories = useSelector((store) => store.category.categories);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(fetchCategories('https://mocki.io/v1/2948309d-3427-4907-872c-43ad8ac540e0'));
  }, []);

  React.useEffect(() => {
    let categoryImages = {};
    categories.forEach((category) => {
      categoryImages[
        category
      ] = require(`../../assets/images/category/${category}.png`);
    });
    setCategoryImages(categoryImages);
  }, [categories]);

  return (
    <div className="menu">
      {categories.map((category) => (
        <Category
          key={category}
          image={categoryImages[category]}
          title={category.replace(/_/g, " ").toUpperCase()}
        />
      ))}
    </div>
  );
}

export default Menu;
