import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "../../pages/Details";


const Product = ({img, title, price, idi}) => {
  return (
  <div className="product-card">
    <div className="product-info">
      <Link to ={`/product/${idi}`}>
        <h5>{title}</h5>
      </Link>
    </div>
    <div className="product-image">
      <img src={img}></img>
    </div>
    <div className="product-info">
      <h6>{price}$</h6>
    </div>
  </div>)
};

export default Product;


{/* <Switch>
  <Route path = "/Details/:prodId" component = {Details}></Route>
</Switch> */}