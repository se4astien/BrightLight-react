import React from "react";

const ProductItem = props => {
  return (
    <div className="product-item">
      <div className="product-info">
        <h4>{props.subTitle}</h4>
        <div className="color">
          <p>{props.color}</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <p className="price">{props.price}</p>
        <button className="add-cart">{props.button}</button>
      </div>
      <img src={props.url} alt={props.alt} />
    </div>
  );
};

export default ProductItem;
