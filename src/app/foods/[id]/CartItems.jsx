"use client";

import { cartContex } from "@/contex/CartProvider";
import React, { use} from "react";

const CartItems = () => {
  const {cart}=use(cartContex)
console.log(cart)
  return (
    <div>
      <h1>
        Total Add To Cart {cart.length}
      </h1>
       
    </div>
  );
};

export default CartItems;
