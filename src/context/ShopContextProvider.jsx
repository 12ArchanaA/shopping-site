import React, { useState, createContext } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    console.log(totalAmount);
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newCount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newCount }));
  };

  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalAmount,
  };

  console.log(cartItem);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
