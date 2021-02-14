import React from "react";

const Product = ({img, title, price}) => (
  <div className="product-card">
    <div className="product-info">
      <h5>{title}</h5>
    </div>
    <div className="product-image">
      <img src={img}></img>
    </div>
    <div className="product-info">
      <h6>{price}$</h6>
    </div>
  </div>
);

export default Product;
