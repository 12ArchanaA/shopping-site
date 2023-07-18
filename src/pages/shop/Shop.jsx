import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h3>Shop here</h3>
      </div>
      <div className="shop-products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
