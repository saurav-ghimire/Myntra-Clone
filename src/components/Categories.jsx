import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops"
  ];

  return (
    <div className="categories-wrapper">
      <div className="container">
        <div className="title-section">
          <h2>Shop By</h2>
          <h4>Category</h4>
        </div>
        <div className="all-category">
          {categories.map((category, index) => (
            <div className="single-category" key={index}>
              <Link to={`category/${category}`}>
                <img src={`./images/c${index + 1}.webp`} alt={category} />
                <h5>{category}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
