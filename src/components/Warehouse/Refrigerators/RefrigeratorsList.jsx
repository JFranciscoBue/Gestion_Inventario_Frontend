import React from "react";
import Refrigerator from "./Refrigerator";
import { useState } from "react";
import styles from "./RefrigeratorsList.module.css";

const RefrigeratorsList = () => {
  const [refrigerators, setRefrigerators] = useState([
    {
      title: "Samsung RT38K5930S8",
      description:
        "Refrigerador Samsung No Frost de 382L con tecnología Twin Cooling Plus, acabado en acero inoxidable.",
      poster: "https://example.com/samsung-rt38k5930s8.jpg",
      stock: 10,
      price: 750,
    },
    {
      title: "LG InstaView Door-in-Door",
      description:
        "Refrigerador LG de 635L con panel de vidrio InstaView y tecnología SmartThinQ para control remoto.",
      poster: "https://example.com/lg-instaview.jpg",
      stock: 5,
      price: 1500,
    },
    {
      title: "Whirlpool WRX735SDHZ",
      description:
        "Refrigerador Whirlpool de 678L con diseño French Door y dispensador de agua y hielo.",
      poster: "https://example.com/whirlpool-wrx735sdhz.jpg",
      stock: 8,
      price: 1400,
    },
    {
      title: "Mabe RMP400FZUU",
      description:
        "Refrigerador Mabe de 394L con sistema Total Fresh Flow y cajón de frutas y verduras.",
      poster: "https://example.com/mabe-rmp400fzuu.jpg",
      stock: 12,
      price: 600,
    },
    {
      title: "Hisense RT641N4WGU",
      description:
        "Refrigerador Hisense de 508L con tecnología Multi Air Flow y pantalla LED táctil.",
      poster: "https://example.com/hisense-rt641n4wgu.jpg",
      stock: 7,
      price: 900,
    },
  ]);

  return (
    <div className={styles.refrigerators_container}>
      {refrigerators.map(
        ({ title, description, poster, stock, price }, index) => {
          return (
            <Refrigerator
              key={index}
              title={title}
              description={description}
              poster={poster}
              stock={stock}
              price={price}
            />
          );
        }
      )}
    </div>
  );
};

export default RefrigeratorsList;
