import React from "react";
import Nav from "./Nav.js";
import Hero from "./Hero.js";
import Collection from "./Collection.js";
import Product from "./Product.js";
import Philosophy from "./Philosophy.js";
import Newsletter from "./Newsletter.js";
import Footer from "./Footer.js";
import "./css/Reset.css";
import "./css/Main.css";
import "./css/Responsive.css";

const App = () => {
  return (
    <>
      {/* {<!-------------------- NAV -------------------->} */}
      <Nav></Nav>
      {/* {<!-------------------- HERO -------------------->} */}
      <Hero></Hero>
      {/* {<!-------------------- COLLECTION -------------------->} */}
      <Collection></Collection>
      {/* {<!-------------------- PRODUCT -------------------->} */}
      <Product></Product>
      {/* {<!-------------------- PHILOSOPHY -------------------->} */}
      <Philosophy></Philosophy>
      {/* {<!-------------------- NEWSLETTER -------------------->} */}
      <Newsletter></Newsletter>
      {/* {<!-------------------- FOOTER -------------------->} */}
      <Footer></Footer>
    </>
  );
};

export default App;
