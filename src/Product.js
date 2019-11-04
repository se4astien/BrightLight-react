import React from "react";

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

      {/* <!-- items --> */}
      <div className="product-items">
        {/* <!-- item 01 --> */}
        <div className="product-item">
          <div className="product-info">
            <h4>City 01</h4>
            <div className="color">
              <p>Color</p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <p className="price">$98.00</p>
            <button className="add-cart">Add to cart</button>
          </div>
          <img src="https://picsum.photos/id/100/860/860" alt="product" />
        </div>
        {/* <!-- item 02 --> */}
        <div className="product-item">
          <div className="product-info">
            <h4>City 02</h4>
            <div className="color">
              <p>Color</p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <p className="price">$98.00</p>
            <button className="add-cart">Add to cart</button>
          </div>
          <img src="https://picsum.photos/id/1000/860/860" alt="product" />
        </div>
        {/* <!-- item 03 --> */}
        <div className="product-item">
          <div className="product-info">
            <h4>City 03</h4>
            <div className="color">
              <p>Color</p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <p className="price">$98.00</p>
            <button className="add-cart">Add to cart</button>
          </div>
          <img src="https://picsum.photos/id/1015/860/860" alt="product" />
        </div>
        {/* <!-- item 04 --> */}
        <div className="product-item">
          <div className="product-info">
            <h4>City 04</h4>
            <div className="color">
              <p>Color</p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <p className="price">$98.00</p>
            <button className="add-cart">Add to cart</button>
          </div>
          <img src="https://picsum.photos/id/1016/860/860" alt="product" />
        </div>
      </div>

      <button className="browse">Browse all</button>
    </section>
  );
};

export default Product;
