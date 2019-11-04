import React from "react";
import Header from "./Header.js";
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
      <Header></Header>
      <Hero></Hero>
      <Collection></Collection>
      <Product></Product>
      <Philosophy></Philosophy>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
};

export default App;
