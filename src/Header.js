import React from "react";
import Menu from "./Menu.js";
import MenuMobile from "./MenuMobile.js";

const Header = props => {
  return (
    <header>
      <h1 className="logo">Travel Factor</h1>

      <nav className="desktop">
        <ul className="menu">
          <Menu href="#collection" name="Collection"></Menu>
          <Menu href="#products" name="Products"></Menu>
          <Menu href="#philosophy" name="Philosophy"></Menu>
        </ul>
        <div className="cart-item">
          <div className="count">2</div>
          <ion-icon name="cart"></ion-icon>
        </div>
      </nav>

      <nav className="mobile">
        <ion-icon name="menu"></ion-icon>
        <ul className="mobile-menu">
          <MenuMobile href="#collection" name="Collection"></MenuMobile>
          <MenuMobile href="#products" name="Products"></MenuMobile>
          <MenuMobile href="#philosophy" name="Philosophy"></MenuMobile>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
