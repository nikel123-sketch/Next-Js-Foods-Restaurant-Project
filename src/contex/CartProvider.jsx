"use client";
import React, { createContext, useState } from "react";

export const cartContex = createContext();

const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const addcart = (item) => {
    setcart( [item, ...cart]);
  };

  const cartinfo = {
    addcart,
    cart,
  };

  return <cartContex.Provider value={cartinfo}>{children}</cartContex.Provider>;
};

export default CartProvider;
