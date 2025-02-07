import React from "react";
import styles from "./Product.module.css";

const Product = ({ prods }) => {
  return (
    <div className={styles.productCard}>
      <h3>{prods.title}</h3>
      <img src={prods.poster} />
      <p>{prods.description}</p>
      <span>${prods.price}</span>
      <button>Añadir</button>
    </div>
  );
};

export default Product;
