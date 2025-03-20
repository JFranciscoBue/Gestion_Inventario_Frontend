import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profileContainer__header">
        <div className="profileContainer__header__brand-username">
          <h2>Minimarket Inventory</h2>
          <p>Maritanegra_123</p>
        </div>
        <button className="profileContainer__header__logoutButton">
          Cerrar Sesion
        </button>
      </div>

      <div className="profileContainer__body">
        <div className="profielContainer__body-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3xX1RXNq1mEfRGra5AXgd7zixQv1GjHHbg&s"
            alt="profile_photo"
          />
          <h3>Maria Negra Del Carmen</h3>
          <div className="profileContainer__body__left__buttons">
            <div className="profileContainer__body__left__buttons-2">
              <i class="bx bx-arrow-back"></i>
              <span>Volver</span>
            </div>
            <button>EDITAR PERFIL</button>
          </div>
        </div>
        <div className="profileContainer__body-right">
          <div className="profileContainer__body-right-info">
            <h4>Basic Data</h4>
            <div className="body-right-info__group">
              <h5>Fecha de nacimiento</h5>
              <p>17/08/1992</p>
            </div>
            <div className="body-right-info__group">
              <h5>Correo electronico</h5>
              <p>maritaputa@gmail.com</p>
            </div>
            <div className="body-right-info__group">
              <h5>Numero de telefono</h5>
              <p>+548675656786</p>
            </div>
            <div className="body-right-info__group">
              <h5>DNI</h5>
              <p>28297865</p>
            </div>
            <div className="body-right-info__group">
              <h5>Direccion de almacen</h5>
              <p>Tumama 4038</p>
            </div>
          </div>
          <div className="profileContainer__body-right-order">
            <h4>My Orders</h4>
            <div className="body-rigth-order__container">
              <div className="body-right-order__group">
                <div className="providerInfo">
                  <h5>PROVIDER</h5>
                  <p>Juanchito</p>
                </div>
                <div className="address">
                  <h5>Adress</h5>
                  <p>Tu abuela 4038</p>
                </div>
                <div className="cadet">
                  <h5>Cadet</h5>
                  <p>Sefty</p>
                </div>
                <div className="status">
                  <h5>Status</h5>
                  <p>ENTREGADO</p>
                </div>
              </div>
              <div className="body-right-order__group">
                <div className="providerInfo">
                  <h5>PROVIDER</h5>
                  <p>Juanchito</p>
                </div>
                <div className="address">
                  <h5>Adress</h5>
                  <p>Tu abuela 4038</p>
                </div>
                <div className="cadet">
                  <h5>Cadet</h5>
                  <p>Sefty</p>
                </div>
                <div className="status">
                  <h5>Status</h5>
                  <p>ENTREGADO</p>
                </div>
              </div>
              <div className="body-right-order__group">
                <div className="providerInfo">
                  <h5>PROVIDER</h5>
                  <p>Juanchito</p>
                </div>
                <div className="address">
                  <h5>Adress</h5>
                  <p>Tu abuela 4038</p>
                </div>
                <div className="cadet">
                  <h5>Cadet</h5>
                  <p>Sefty</p>
                </div>
                <div className="status">
                  <h5>Status</h5>
                  <p>ENTREGADO</p>
                </div>
              </div>
              <div className="body-right-order__group">
                <div className="providerInfo">
                  <h5>PROVIDER</h5>
                  <p>Juanchito</p>
                </div>
                <div className="address">
                  <h5>Adress</h5>
                  <p>Tu abuela 4038</p>
                </div>
                <div className="cadet">
                  <h5>Cadet</h5>
                  <p>Sefty</p>
                </div>
                <div className="status">
                  <h5>Status</h5>
                  <p>ENTREGADO</p>
                </div>
              </div>
              <div className="body-right-order__group">
                <div className="providerInfo">
                  <h5>PROVIDER</h5>
                  <p>Juanchito</p>
                </div>
                <div className="address">
                  <h5>Adress</h5>
                  <p>Tu abuela 4038</p>
                </div>
                <div className="cadet">
                  <h5>Cadet</h5>
                  <p>Sefty</p>
                </div>
                <div className="status">
                  <h5>Status</h5>
                  <p>ENTREGADO</p>
                </div>
              </div>
              <div className="body-right-order__group">
                <div className="providerInfo">
                  <h5>PROVIDER</h5>
                  <p>Juanchito</p>
                </div>
                <div className="address">
                  <h5>Adress</h5>
                  <p>Tu abuela 4038</p>
                </div>
                <div className="cadet">
                  <h5>Cadet</h5>
                  <p>Sefty</p>
                </div>
                <div className="status">
                  <h5>Status</h5>
                  <p>ENTREGADO</p>
                </div>
              </div>
              <div className="body-right-order__group">
                <div className="providerInfo">
                  <h5>PROVIDER</h5>
                  <p>Juanchito</p>
                </div>
                <div className="address">
                  <h5>Adress</h5>
                  <p>Tu abuela 4038</p>
                </div>
                <div className="cadet">
                  <h5>Cadet</h5>
                  <p>Sefty</p>
                </div>
                <div className="status">
                  <h5>Status</h5>
                  <p>ENTREGADO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
