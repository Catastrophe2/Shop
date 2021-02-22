import React from "react";
import Product from "../Product/Product.js";

const Products = ({products, category, range}) => {
    let filtered = [];
    let rangeFiltered = products.filter((item) => {if(item.price>=range[0] && item.price <= range[1])return item})
    if (category === "all"){
        filtered = rangeFiltered;
    } else {
        filtered = rangeFiltered.filter((item)=>{if(item.category === category)return item})
    }
    if (rangeFiltered.length === 0){return <div>Sorry, nothing to show</div>} 
    else{
        return filtered.map(({ id, image, title, price }) => (
            <Product key={id} img={image} title={title} price={price} idi = {id} />
        ));
    }



}
export default Products;
