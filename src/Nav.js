import React from "react";

const Nav = props => {
  return (
    <header>
      <h1 className="logo">Travel Factor</h1>

      <nav className="desktop">
        <ul className="menu">
          <li className="menu-items">
            <a href="#">Collection</a>
          </li>
          <li className="menu-items">
            <a href="#">Products</a>
          </li>
          <li className="menu-items">
            <a href="#">Philosophy</a>
          </li>
        </ul>
        <div className="cart-item">
          <div className="count">2</div>
          <ion-icon name="cart"></ion-icon>
        </div>
      </nav>

      <nav className="mobile">
        <ion-icon name="menu"></ion-icon>
        <ul className="mobile-menu">
          <li>
            <a href="#collection">Products</a>
          </li>
          <li>
            <a href="#product">Collection</a>
          </li>
          <li>
            <a href="#philosophy">Philosophy</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
