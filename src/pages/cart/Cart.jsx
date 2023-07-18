import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, getTotalAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalAmount();
  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <>
          <div>
            <h1>Cart Items</h1>
          </div>
          <div className="cart-items">
            {PRODUCTS.map((product) => {
              if (cartItem[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>
          <div className="checkout">
            <p>Total Amount: ₹{totalAmount}</p>
            <div className="checkout-buttons">
              <button onClick={() => navigate("/")}>Continue Shopping</button>
              <button>Buy</button>
            </div>
          </div>{" "}
        </>
      ) : (
        <h3>Your Cart is empty</h3>
      )}
    </div>
  );
};

export default Cart;
