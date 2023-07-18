import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItem } = useContext(ShopContext);
  const cartItemAmount = cartItem[id];
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₹{price}</p>
      </div>
      <button className="add-to-cart-button" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 ? <>({cartItemAmount})</> : ""}
      </button>
    </div>
  );
};

export default Product;
