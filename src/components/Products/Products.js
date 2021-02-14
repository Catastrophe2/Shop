import React from "react";
import Product from "../Product/Product.js";

const Products = ({products, category}) => {
    let filtered = [];
    if (category === "all"){
        filtered = products;
    } else {
        filtered = products.filter((item)=>{if(item.category === category)return item})
    }
    
    return filtered.map(({ id, image, title, price }) => (
        <Product key={id} img={image} title={title} price={price} />
    ));
}
export default Products;
