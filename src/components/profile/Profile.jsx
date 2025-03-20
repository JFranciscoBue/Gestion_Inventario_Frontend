import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    ID: 5,
    Email: "lucas.fernandez@gmail.com",
    Nombre: "Maria Del Carmen",
    Apellido: "Fernández",
    Telefono: 1167890123,
    FechaNacimiento: "1995-05-20", // 10 de diciembre de 1985
    DNI: 25678945,
    Usuario: "mariaF85",
    Contraseña: "lucasContraseña321",
    Direccion: "Belgrano 321, Salta",
    Almacen: "Depósito Este",
  });

  const [orders, setOrders] = useState([
    {
      ID: 1,
      Proveedor: "Distribuidora La Esperanza",
      Direccion: "Av. Libertad 123, Buenos Aires",
      Entrega: "2025-03-22",
      Productos: ["Harina 000", "Aceite de girasol", "Arroz largo fino"],
      Cadete: "Martín Rodríguez",
    },
    {
      ID: 2,
      Proveedor: "Frutas y Verduras El Campo",
      Direccion: "Calle Principal 456, Córdoba",
      Entrega: "2025-03-23",
      Productos: ["Manzanas", "Papas", "Tomates", "Zanahorias"],
      Cadete: "Lucía Gómez",
    },
    {
      ID: 3,
      Proveedor: "Carnes Premium S.A.",
      Direccion: "Ruta 9 km 32, Rosario",
      Entrega: "2025-03-24",
      Productos: ["Carne de res", "Pechuga de pollo", "Chorizos"],
      Cadete: "Fernando López",
    },
    {
      ID: 1,
      Proveedor: "Distribuidora La Esperanza",
      Direccion: "Av. Libertad 123, Buenos Aires",
      Entrega: "2025-03-22",
      Productos: ["Harina 000", "Aceite de girasol", "Arroz largo fino"],
      Cadete: "Martín Rodríguez",
    },
    {
      ID: 2,
      Proveedor: "Frutas y Verduras El Campo",
      Direccion: "Calle Principal 456, Córdoba",
      Entrega: "2025-03-23",
      Productos: ["Manzanas", "Papas", "Tomates", "Zanahorias"],
      Cadete: "Lucía Gómez",
    },
    {
      ID: 3,
      Proveedor: "Carnes Premium S.A.",
      Direccion: "Ruta 9 km 32, Rosario",
      Entrega: "2025-03-24",
      Productos: ["Carne de res", "Pechuga de pollo", "Chorizos"],
      Cadete: "Fernando López",
    },
    {
      ID: 4,
      Proveedor: "Lácteos La Serenísima",
      Direccion: "Av. Industrial 789, Mendoza",
      Entrega: "2025-03-25",
      Productos: ["Leche entera", "Yogur natural", "Queso cremoso"],
      Cadete: "Sofía Fernández",
    },
    {
      ID: 5,
      Proveedor: "Panadería San José",
      Direccion: "Calle Belgrano 321, Tucumán",
      Entrega: "2025-03-26",
      Productos: ["Pan lactal", "Medialunas", "Bizcochos"],
      Cadete: "Javier Méndez",
    },
  ]);

  return (
    <div className="profileContainer">
      <div className="profileContainer__header">
        <div className="profileContainer__header__brand-username">
          <h2>Minimarket Inventory</h2>
          <div className="profileContainer__header__username">
            <i class="bx bx-user"></i>
            <p>{user.Usuario}</p>
          </div>
        </div>
        <div className="profileContainer__header__logout">
          <i class="bx bx-log-out"></i>
          <button className="profileContainer__header__logoutButton">
            Cerrar Sesion
          </button>
        </div>
      </div>

      <div className="profileContainer__body">
        <div className="profielContainer__body-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3xX1RXNq1mEfRGra5AXgd7zixQv1GjHHbg&s"
            alt="profile_photo"
          />
          <h3>{user.Nombre}</h3>
          <div className="profileContainer__body__left__buttons">
            <div className="profileContainer__body__left__buttons-2">
              <i class="bx bx-arrow-back"></i>
              <Link className="link" to="/products">Volver</Link>
            </div>
            <button>EDITAR PERFIL</button>
          </div>
        </div>
        <div className="profileContainer__body-right">
          <div className="profileContainer__body-right-info">
            <h4>Basic Data</h4>
            <div className="body-right-info__group">
              <h5>Fecha de nacimiento</h5>
              <p>{user.FechaNacimiento}</p>
            </div>
            <div className="body-right-info__group">
              <h5>Correo electronico</h5>
              <p>{user.Email}</p>
            </div>
            <div className="body-right-info__group">
              <h5>Numero de telefono</h5>
              <p>{user.Telefono}</p>
            </div>
            <div className="body-right-info__group">
              <h5>DNI</h5>
              <p>{user.DNI}</p>
            </div>
            <div className="body-right-info__group">
              <h5>Direccion de almacen</h5>
              <p>{user.Almacen}</p>
            </div>
          </div>
          <div className="profileContainer__body-right-order">
            <h4>My Orders</h4>
            <div className="body-rigth-order__container">
              {orders.map((order) => {
                return (
                  <div className="body-right-order__group">
                    <div className="providerInfo">
                      <h5>PROVIDER</h5>
                      <p>{order.Proveedor}</p>
                    </div>
                    <div className="adress">
                      <h5>ADRESS</h5>
                      <p>{order.Direccion}</p>
                    </div>
                    <div className="cadet">
                      <h5>CADET</h5>
                      <p>{order.Cadete}</p>
                    </div>
                    <div className="status">
                      <h5>STATUS</h5>
                      <p>{order.Entrega}</p>
                    </div>
                    <button>See more details</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
