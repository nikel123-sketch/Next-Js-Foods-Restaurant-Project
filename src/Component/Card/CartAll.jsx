"use client";

import React, { useContext } from "react";
import { cartContex } from "@/contex/CartProvider";
import CartCard from "@/Component/Card/CartCard"; // correct import path

const CartAll = () => {
  const { cart } = useContext(cartContex);

  if (!cart || cart.length === 0) {
    return <p className="text-gray-300">Your cart is empty</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {cart.map((cartItem, i) => (
        <CartCard key={i} item={cartItem} />
      ))}
    </div>
  );
};

export default CartAll;
