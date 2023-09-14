import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import data from "./temp/data";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

import "./css/list.css";
import "./css/pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`page-button ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default function ProductList() {
  const navigate = useNavigate();

  const [products, setProducts] = useState(data.data[0].products);
  const API_URL = "https://fakestoreapi.com";
  const location = useLocation();

  const { pathname, search } = location;

  const pathSegments = pathname.split("/");
  let category = pathSegments[2] || "All Categories";
  category = category.toLocaleUpperCase();
  category = category.replace(/%20/g, " ");
  let subcategory = pathSegments[3] || "All Subcategories";
  subcategory = subcategory.toLocaleUpperCase();
  subcategory = subcategory.replace(/%20/g, " ");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  useEffect(() => {
    const { pathname, search } = location;
    const path = pathname + search;
    console.log(path);
    const queryParams = queryString.parse(search);
    if (queryParams.page === undefined || currentPage != queryParams.page)
      setCurrentPage(1);

    // fetch(`${API_URL + pathname}?${updatedQueryString}`)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error("Network response was not ok");
    //     }
    //   })
    //   .then((data) => {
    //     setProducts(data);
    //   })
    //   .catch((error) => {
    //     console.error("Fetch error:", error);
    //   });
  }, [location]);

  React.useEffect(() => {
    const queryParams = queryString.parse(search);
    queryParams.page = currentPage;
    queryParams.limit = productsPerPage;
    const updatedQueryString = queryString.stringify(queryParams);

    navigate(`${pathname}?${updatedQueryString}`);
  }, [currentPage]);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="list">
      <h3 className="list-title">
        {category} - {subcategory}
      </h3>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(2000 / productsPerPage)}
        onPageChange={onPageChange}
      />
    </div>
  );
}
