import React, { useState } from "react";
import "./Category.css";
import products from "../../data/product";
import ProductCard from "../ProductCard/ProductCard";

const Category = () => {

  const categories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");


  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (item) => item.category === selectedCategory
        );


  return (
    <section className="category">

      <h2>Shop By Category</h2>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "active"
                : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>


      <div className="product-grid">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>

    </section>
  );
};

export default Category;