import React from "react";
import ProductItem from "./ProductItem.js";

const Product = () => {
  return (
    <section className="product">
      <div className="section-top-bar">
        <a href="#">
          <h3 className="section-category">Travel</h3>
        </a>
        <div className="product-badge">
          <span>Spring summer collection</span>
        </div>
      </div>
      <div className="product-items">
        <ProductItem
          subTitle="City 01"
          color="color"
          price="100$"
          button="Add to Cart"
          url="https://picsum.photos/id/100/860/860"
          alt="product"
        ></ProductItem>
        <ProductItem
          subTitle="City 01"
          color="color"
          price="100$"
          button="Add to Cart"
          url="https://picsum.photos/id/1000/860/860"
          alt="product"
        ></ProductItem>
        <ProductItem
          subTitle="City 01"
          color="color"
          price="100$"
          button="Add to Cart"
          url="https://picsum.photos/id/1015/860/860"
          alt="product"
        ></ProductItem>
        <ProductItem
          subTitle="City 01"
          color="color"
          price="100$"
          button="Add to Cart"
          url="https://picsum.photos/id/1016/860/860"
          alt="product"
        ></ProductItem>
      </div>
      <button className="browse">Browse all</button>
    </section>
  );
};

export default Product;
