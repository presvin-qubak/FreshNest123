import React from "react";
import "./Shop.css";
import products from "../../data/product";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop = () => {
  return (
    <section className="shop">

      <h1>All Products</h1>

      <div className="shop-grid">

        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </section>
  );
};

export default Shop;