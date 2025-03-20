import React from "react";
import "./Navbar.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <i class="bx bxs-store"></i>
        <h1>Minimarket Inventory</h1>
      </div>
      <nav className="header__navbar">
        <ul className="header__navbar_list">
          <li className="header__navbar_list_item">
            <i class="bx bxl-product-hunt"></i>
            <p>Products</p>
          </li>
          <li className="header__navbar_list_item">
            <i class="bx bx-shopping-bag"></i>
            <p>Store</p>
          </li>
          <li className="header__navbar_list_item">
            <i class="bx bx-cart"></i>
            <p>Cart</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
