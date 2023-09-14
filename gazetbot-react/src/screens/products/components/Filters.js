import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./css/filters.css";

import { useNavigate } from "react-router-dom";

export default function Filters() {
  const navigate = useNavigate();
  const availableFilters = [
    {
      name: "available",
      label: "Availability",
      type: "checkbox",
      options: ["include out of stock"],
    },
    {
      name: "brands",
      label: "Brands",
      type: "checkbox",
      options: ["Apple", "Samsung", "Redmi", "OnePlus", "Realme", "Oppo"],
    },
    {
      name: "price",
      label: "Price",
      type: "range",
      options: {
        min: 0,
        max: 1000,
        step: 100,
      },
    },
    {
      name: "rating",
      label: "Rating",
      type: "range",
      options: {
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
    {
      name: "discount",
      label: "Discount",
      type: "range",
      options: {
        min: 0,
        max: 100,
        step: 5,
      },
    },
  ];

  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const [filters, setFilters] = useState({
    available: [],
    brands: [],
    priceMin: 0,
    priceMax: 1000,
    ratingMin: 0,
    ratingMax: 5,
    discountMin: 0,
    discountMax: 100,
  });

  const handleCheckboxChange = (name, option) => {
    const updatedFilters = { ...filters };
    if (updatedFilters[name].includes(option)) {
      updatedFilters[name] = updatedFilters[name].filter(
        (item) => item !== option
      );
    } else {
      updatedFilters[name].push(option);
    }
    setFilters(updatedFilters);
  };

  const handleRangeChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const clearFilters = () => {
    setFilters({
      available: [],
      brands: [],
      priceMin: 0,
      priceMax: 1000,
      ratingMin: 0,
      ratingMax: 5,
      discountMin: 0,
      discountMax: 100,
    });
  };

  const applyFilters = () => {
    const filterParts = [];

    if (filters.available.length > 0) {
      filterParts.push(`availability=${filters.available.join(",")}`);
    }

    if (filters.brands.length > 0) {
      filterParts.push(`brands=${filters.brands.join(",")}`);
    }

    filterParts.push(`priceMin=${filters.priceMin}`);
    filterParts.push(`priceMax=${filters.priceMax}`);

    filterParts.push(`ratingMin=${filters.ratingMin}`);
    filterParts.push(`ratingMax=${filters.ratingMax}`);

    filterParts.push(`discountMin=${filters.discountMin}`);
    filterParts.push(`discountMax=${filters.discountMax}`);

    filterParts.push(`page=1`);
    filterParts.push(`limit=20`);

    const queryString = filterParts.join("&");

    let path = window.location.pathname;
    let search = queryString ? `?${queryString}` : "";

    navigate(`${path}${search}`);
  };

  const FilterSection = ({ filter }) => {
    const { name, label, type, options } = filter;

    const FilterOptions = () => {
      if (type === "checkbox") {
        return options.map((option, index) => {
          return (
            <div className="filter-option" key={index}>
              <input
                type="checkbox"
                id={`${name}-${index}`}
                name={name}
                value={option}
                onChange={() => handleCheckboxChange(name, option)}
                checked={filters[name].includes(option)}
              />
              <label htmlFor={`${name}-${index}`} className="filter-label">
                {option}
              </label>
            </div>
          );
        });
      } else if (type === "range") {
        return (
          <div>
            <div className="filter-option">
              Min :
              <input
                type="range"
                id={`${name}-min-range`}
                name={`${name}-min`}
                min={options.min}
                max={options.max}
                step={options.step}
                value={filters[`${name}Min`]}
                onChange={(e) =>
                  handleRangeChange(`${name}Min`, parseFloat(e.target.value))
                }
              />
              <label htmlFor={`${name}-min-range`} className="filter-label">
                {filters[`${name}Min`]}
              </label>
            </div>
            <div className="filter-option">
              Max :
              <input
                type="range"
                id={`${name}-max-range`}
                name={`${name}-max`}
                min={options.min}
                max={options.max}
                step={options.step}
                value={filters[`${name}Max`]}
                onChange={(e) =>
                  handleRangeChange(`${name}Max`, parseFloat(e.target.value))
                }
              />
              <label htmlFor={`${name}-max-range`} className="filter-label">
                {filters[`${name}Max`]}
              </label>
            </div>
          </div>
        );
      }
    };

    return (
      <div className="filter-section">
        <div className="filter-section-header" onClick={toggleFilter}>
          <span className="filter-label">{label}</span>
        </div>
        <div className={`filter-options ${isFilterOpen ? "open" : ""}`}>
          <FilterOptions />
        </div>
      </div>
    );
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <FontAwesomeIcon icon={faFilter} className="filter-icon" />
        <span className="filter-title">Filters</span>
      </div>
      <div className="filters-body">
        {availableFilters.map((filter, index) => {
          return <FilterSection filter={filter} key={index} />;
        })}
      </div>
      <button onClick={applyFilters} className="apply-button">
        Apply Filters
      </button>
      <button onClick={clearFilters} className="clear-button">
        Clear Filters
      </button>
    </div>
  );
}
