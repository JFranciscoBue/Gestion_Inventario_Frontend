import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <a href="#" className={styles.navbar__list__item}>
          <li>Productos</li>
        </a>
        <a href="#" className={styles.navbar__list__item}>
          <li>Almacen</li>
        </a>
        <a href="#" className={styles.navbar__list__item}>
          <li>Carrito</li>
        </a>
      </ul>

      <div className={styles.navbar__buttons}>
        <a href="#">Mi Perfil</a>
        <a href="#">Cerrar Sesion</a>
      </div>
    </nav>
  );
};

export default Navigation;
