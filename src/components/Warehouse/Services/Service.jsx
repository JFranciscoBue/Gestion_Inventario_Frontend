import React from "react";
import styles from "./Service.module.css";

const Service = ({ service }) => {
  return (
    <div className={styles.service_card}>
      <div className={styles.service_card_head}>
        <img
          src="https://www.toolrides.com/uploads/files/post_20230608_153826_64823c4226617.jpg"
          alt="poster"
        />
        <h3>{service.title}</h3>
      </div>
      <div className={styles.service_card_body}>
        <h4>{service.description}</h4>
        <h5>Price: {service.price}</h5>
      </div>
      <div className={styles.service_card_footer}>
        <p>Quedan: {service.stock}</p>
      </div>
    </div>
  );
};

export default Service;
