import React, { useState } from "react";
import Service from "./Service";
import styles from "./ServicesList.module.css";

const ServicesList = () => {
  const [services, setServices] = useState([
    {
      title: "Delivery Express",
      description:
        "Servicio de entrega rápida a domicilio en un radio de 5 km.",
      poster: "https://example.com/delivery-express.jpg",
      stock: 50,
      price: 2.99,
    },
    {
      title: "Recarga de Celular",
      description:
        "Recarga saldo a tu celular de cualquier operador en segundos.",
      poster: "https://example.com/recarga-celular.jpg",
      stock: 100,
      price: 1.0,
    },
    {
      title: "Pago de Servicios",
      description:
        "Paga tus facturas de luz, agua, gas e internet sin hacer filas.",
      poster: "https://example.com/pago-servicios.jpg",
      stock: 200,
      price: 0.5,
    },
    {
      title: "Corte de Fiambres",
      description:
        "Servicio de corte de fiambres y quesos al peso según tu preferencia.",
      poster: "https://example.com/corte-fiambres.jpg",
      stock: 30,
      price: 0.0,
    },
    {
      title: "Cafetería Express",
      description:
        "Preparación de café, té y otras bebidas calientes para llevar.",
      poster: "https://example.com/cafeteria-express.jpg",
      stock: 40,
      price: 1.5,
    },
  ]);

  return (
    <div className={styles.services_container}>
      <h2>Ofrecemos los Siguientes Servicios</h2>
      {services.map((service) => {
        return <Service service={service} />;
      })}
    </div>
  );
};

export default ServicesList;
