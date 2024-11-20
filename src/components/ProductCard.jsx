import React from "react";

const ProductCard = ({ product, removeProduct }) => {
  const handleRemove = () => {
    removeProduct(product.id); // Call removeProduct function with the product id
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹ {product.price}</p>
      <button onClick={handleRemove} className="remove-button">
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
