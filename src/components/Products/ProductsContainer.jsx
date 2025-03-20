import React from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductsContainer.css";

const ProductsContainer = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      titulo: "Caja de cartón",
      descripcion: "Caja de cartón para embalar productos",
      stock: 100,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 50.0,
    },
    {
      id: 2,
      titulo: "Bolsa de plástico",
      descripcion: "Bolsa de plástico para embalar productos",
      stock: 500,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 20.0,
    },
    {
      id: 3,
      titulo: "Cinta adhesiva",
      descripcion: "Cinta adhesiva para cerrar cajas",
      stock: 200,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 30.0,
    },
    {
      id: 4,
      titulo: "Etiquetas",
      descripcion: "Etiquetas para identificar productos",
      stock: 1000,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 40.0,
    },
    {
      id: 5,
      titulo: "Sellador de pisos",
      descripcion: "Sellador de pisos para mantener limpios los pisos",
      stock: 50,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 80.0,
    },
    {
      id: 6,
      titulo: "Pintura",
      descripcion: "Pintura para decorar y proteger superficies",
      stock: 20,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 120.0,
    },
    {
      id: 7,
      titulo: "Barniz",
      descripcion: "Barniz para proteger y dar brillo a superficies",
      stock: 30,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 100.0,
    },
    {
      id: 8,
      titulo: "Adhesivos",
      descripcion: "Adhesivos para unir superficies",
      stock: 40,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 60.0,
    },
    {
      id: 9,
      titulo: "Cinta aislante",
      descripcion: "Cinta aislante para proteger cables y conexiones",
      stock: 50,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 20.0,
    },
    {
      id: 10,
      titulo: "Tubos de PVC",
      descripcion: "Tubos de PVC para sistemas de agua y gas",
      stock: 20,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 150.0,
    },
    {
      id: 11,
      titulo: "Herramientas básicas",
      descripcion: "Herramientas básicas para reparaciones y mantenimiento",
      stock: 10,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 200.0,
    },
    {
      id: 12,
      titulo: "Llaves inglesas",
      descripcion: "Llaves inglesas para ajustar y aflojar tuercas",
      stock: 20,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 50.0,
    },
    {
      id: 13,
      titulo: "Alicates",
      descripcion: "Alicates para sujetar y manipular objetos",
      stock: 15,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 30.0,
    },
    {
      id: 14,
      titulo: "Cinta métrica",
      descripcion: "Cinta métrica para medir longitudes y anchuras",
      stock: 25,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 20.0,
    },
    {
      id: 15,
      titulo: "Lámpara de trabajo",
      descripcion: "Lámpara de trabajo para iluminar áreas de trabajo",
      stock: 10,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 100.0,
    },
    {
      id: 16,
      titulo: "Extintor de incendios",
      descripcion: "Extintor de incendios para emergencias",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 150.0,
    },
    {
      id: 17,
      titulo: "Kit de primeros auxilios",
      descripcion: "Kit de primeros auxilios para emergencias",
      stock: 10,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 50.0,
    },
    {
      id: 18,
      titulo: "Caja de herramientas",
      descripcion:
        "Caja de herramientas para organizar y transportar herramientas",
      stock: 15,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 80.0,
    },
    {
      id: 19,
      titulo: "Silla de oficina",
      descripcion: "Silla de oficina para confort y productividad",
      stock: 10,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 200.0,
    },
    {
      id: 20,
      titulo: "Mesa de trabajo",
      descripcion: "Mesa de trabajo para oficina o taller",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 300.0,
    },
    {
      id: 21,
      titulo: "Alfombra industrial",
      descripcion: "Alfombra industrial para proteger pisos y reducir ruido",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 250.0,
    },
    {
      id: 22,
      titulo: "Estante metálico",
      descripcion: "Estante metálico para almacenar productos y materiales",
      stock: 12,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 180.0,
    },
    {
      id: 23,
      titulo: "Caja de seguridad",
      descripcion: "Caja de seguridad para proteger objetos valiosos",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 400.0,
    },
    {
      id: 24,
      titulo: "Sistema de iluminación",
      descripcion:
        "Sistema de iluminación para áreas de trabajo y almacenamiento",
      stock: 10,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 300.0,
    },
    {
      id: 25,
      titulo: "Ventilador industrial",
      descripcion: "Ventilador industrial para mejorar la circulación del aire",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 200.0,
    },
    {
      id: 26,
      titulo: "Cinta transportadora",
      descripcion: "Cinta transportadora para mover productos y materiales",
      stock: 12,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 500.0,
    },
    {
      id: 27,
      titulo: "Elevador hidráulico",
      descripcion: "Elevador hidráulico para levantar y mover objetos pesados",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 800.0,
    },
    {
      id: 28,
      titulo: "Sistema de seguridad",
      descripcion:
        "Sistema de seguridad para proteger el almacén y sus contenidos",
      stock: 10,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 1000.0,
    },
    {
      id: 29,
      titulo: "Caja de herramientas neumáticas",
      descripcion:
        "Caja de herramientas neumáticas para reparaciones y mantenimiento",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 350.0,
    },
    {
      id: 30,
      titulo: "Silla de ruedas",
      descripcion: "Silla de ruedas para facilitar el movimiento en el almacén",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 250.0,
    },
    {
      id: 31,
      titulo: "Estantería para herramientas",
      descripcion: "Estantería para organizar y almacenar herramientas",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 220.0,
    },
    {
      id: 32,
      titulo: "Caja de fusibles",
      descripcion: "Caja de fusibles para proteger el sistema eléctrico",
      stock: 12,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 180.0,
    },
    {
      id: 33,
      titulo: "Lámpara de trabajo LED",
      descripcion: "Lámpara de trabajo LED para iluminar áreas de trabajo",
      stock: 10,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 150.0,
    },
    {
      id: 34,
      titulo: "Sistema de ventilación",
      descripcion: "Sistema de ventilación para mejorar la calidad del aire",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 400.0,
    },
    {
      id: 35,
      titulo: "Caja de conexiones eléctricas",
      descripcion: "Caja de conexiones eléctricas para organizar cables",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 120.0,
    },
    {
      id: 36,
      titulo: "Elevador de paletas",
      descripcion: "Elevador de paletas para mover y almacenar paletas",
      stock: 3,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 600.0,
    },
    {
      id: 37,
      titulo: "Sistema de alarma",
      descripcion:
        "Sistema de alarma para proteger el almacén y sus contenidos",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 800.0,
    },
    {
      id: 38,
      titulo: "Caja de herramientas para neumáticos",
      descripcion:
        "Caja de herramientas para neumáticos para reparaciones y mantenimiento",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 280.0,
    },
    {
      id: 39,
      titulo: "Silla de oficina ergonómica",
      descripcion: "Silla de oficina ergonómica para confort y productividad",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 350.0,
    },
    {
      id: 40,
      titulo: "Estantería para archivos",
      descripcion:
        "Estantería para archivos para organizar y almacenar documentos",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 200.0,
    },
    {
      id: 41,
      titulo: "Caja de herramientas para electricidad",
      descripcion:
        "Caja de herramientas para electricidad para reparaciones y mantenimiento",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 320.0,
    },
    {
      id: 42,
      titulo: "Sistema de iluminación LED",
      descripcion:
        "Sistema de iluminación LED para iluminar áreas de trabajo y almacenamiento",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 280.0,
    },
    {
      id: 43,
      titulo: "Caja de conexiones para redes",
      descripcion:
        "Caja de conexiones para redes para organizar cables y conexiones",
      stock: 10,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 200.0,
    },
    {
      id: 44,
      titulo: "Estante para productos químicos",
      descripcion:
        "Estante para productos químicos para almacenar y organizar productos químicos",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 350.0,
    },
    {
      id: 45,
      titulo: "Sistema de ventilación industrial",
      descripcion:
        "Sistema de ventilación industrial para mejorar la calidad del aire en áreas de trabajo",
      stock: 3,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 500.0,
    },
    {
      id: 46,
      titulo: "Caja de herramientas para fontanería",
      descripcion:
        "Caja de herramientas para fontanería para reparaciones y mantenimiento",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 300.0,
    },
    {
      id: 47,
      titulo: "Sistema de seguridad para puertas",
      descripcion:
        "Sistema de seguridad para puertas para proteger el acceso a áreas restringidas",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 400.0,
    },
    {
      id: 48,
      titulo: "Estante para productos electrónicos",
      descripcion:
        "Estante para productos electrónicos para almacenar y organizar productos electrónicos",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 250.0,
    },
    {
      id: 49,
      titulo: "Sistema de iluminación de emergencia",
      descripcion:
        "Sistema de iluminación de emergencia para proporcionar iluminación en caso de emergencia",
      stock: 5,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 320.0,
    },
    {
      id: 50,
      titulo: "Caja de herramientas para mantenimiento",
      descripcion:
        "Caja de herramientas para mantenimiento para realizar tareas de mantenimiento y reparación",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 280.0,
    },
    {
      id: 51,
      titulo: "Sistema de etiquetado",
      descripcion:
        "Sistema de etiquetado para identificar y organizar productos",
      stock: 10,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 220.0,
    },
    {
      id: 52,
      titulo: "Caja de almacenamiento para documentos",
      descripcion:
        "Caja de almacenamiento para documentos para proteger y organizar documentos importantes",
      stock: 8,
      poster: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
      precio: 180.0,
    },
  ]);

  return (
    <>
      <div className="productsContainer__filters">
        <h2>Filter by Category</h2>
        <div className="productsContainer__filter__groups">
          <button>Alimentos</button>
          <button>Bebidas</button>
          <button>Panadería y Repostería</button>
          <button>Limpieza y Aseo Personal</button>
          <button>Otros </button>
        </div>
      </div>
      <div className="productsContainer">
        {products.map(({ titulo, descripcion, stock, poster, precio, id }) => {
          return (
            <ProductCard
              title={titulo}
              description={descripcion}
              stock={stock}
              poster={poster}
              price={precio}
              key={id}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductsContainer;
