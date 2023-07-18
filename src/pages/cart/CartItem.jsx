import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItem = (props) => {
  const { cartItem, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="cart-item">
      <img src={productImage} alt="" />
      <div className="cart-item-description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₹{price}</p>
        <div className="counter">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItem[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
