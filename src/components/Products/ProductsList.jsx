import React from "react";
import Product from "./Product";
import { useState } from "react";
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const [products, setProducts] = useState([
    {
      title: "Producto 1",
      description: "Este es un producto de alta calidad",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 100.99,
    },
    {
      title: "Producto 2",
      description: "Un producto innovador y fácil de usar",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 50.99,
    },
    {
      title: "Producto 3",
      description: "Un clásico entre los productos de su categoría",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 200.99,
    },
    {
      title: "Producto 4",
      description: "Un producto diseñado para la comodidad y el estilo",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 80.99,
    },
    {
      title: "Producto 5",
      description: "Un producto de última generación con tecnología avanzada",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 300.99,
    },
    {
      title: "Producto 6",
      description: "Un producto versátil y fácil de usar",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 120.99,
    },
    {
      title: "Producto 7",
      description: "Un clásico renovado con tecnología moderna",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 180.99,
    },
    {
      title: "Producto 8",
      description: "Un producto innovador para el hogar",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 250.99,
    },
    {
      title: "Producto 9",
      description: "Un producto de alta calidad para profesionales",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 300.99,
    },
    {
      title: "Producto 10",
      description: "Un producto único y exclusivo",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 400.99,
    },
    {
      title: "Producto 11",
      description: "Un producto compacto y portátil",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 80.99,
    },
    {
      title: "Producto 12",
      description: "Un producto de diseño elegante y sofisticado",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCYt_Skg_DdS56k7TJ6K6bjyh2l-8W_3_WA&s",
      price: 220.99,
    },
  ]);

  return (
    <>
      <h2 className={styles.productsSubtitle}>Productos</h2>
      <div className={styles.productsContainer}>
        {products.map((prod) => {
          return <Product prods={prod} />;
        })}
      </div>
    </>
  );
};

export default ProductsList;
