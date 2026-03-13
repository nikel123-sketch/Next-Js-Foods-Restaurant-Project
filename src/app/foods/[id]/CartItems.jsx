"use client";


import { cartContex } from "@/contex/CartProvider";
import Link from "next/link";
import React, { useContext } from "react";

const CartItems = () => {
  const { cart } = useContext(cartContex);
  

  return (
    <div>
      <h1 className="font-bold underline text-fuchsia-50 text-xl ">
        Cart(
        <span className="text-blue-200 text-xl">{cart.length}</span>)
      </h1>
    

      
    </div>
  );
};

export default CartItems;
