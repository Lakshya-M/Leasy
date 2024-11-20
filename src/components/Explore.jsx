import React from "react";
import ProductCard from "./ProductCard";

const Explore = ({ productList, removeProduct }) => (
  <div className="page">
    <h1>Explore Products</h1>
    <div className="product-list">
      {productList.length > 0 ? (
        productList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            removeProduct={removeProduct} // Pass removeProduct function to ProductCard
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  </div>
);

export default Explore;
