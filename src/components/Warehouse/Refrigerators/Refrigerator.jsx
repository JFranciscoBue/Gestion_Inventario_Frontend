import React from "react";
import styles from "./Refrigerator.module.css";

const Refrigerator = ({ title, description, poster, stock, price }) => {
  return (
    <div className={styles.bg_card}>
      <div className={styles.head_card}>
        <img
          src="https://spiazziweb.com.ar/wp-content/uploads/2024/05/291967_74583202.png"
          alt="poster"
        />
        <h3>{title}</h3>
      </div>
      <div className={styles.body_card}>
        <h4>{description}</h4>
        <h5>Price ${price}</h5>
      </div>
      <div className={styles.footer_card}>
        <p>Quedan: {stock}</p>
      </div>
    </div>
  );
};

export default Refrigerator;
