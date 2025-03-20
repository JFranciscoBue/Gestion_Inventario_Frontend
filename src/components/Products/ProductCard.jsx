import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  title,
  description,
  stock,
  poster,
  price,
  provider,
  id,
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <img src={poster} alt="Product" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card__body">
        <div className="card__body__price-stock">
          <p>Remain: {stock}</p>
          <p className="price_stock-price">${price}</p>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
