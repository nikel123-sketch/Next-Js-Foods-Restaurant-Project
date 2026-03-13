"use client"
import { cartContex } from '@/contex/CartProvider';
import React, { useContext, useState } from 'react';

const BtnAddToCard = ({ food }) => {
  const [incart, setincart] = useState(false);
  const { addcart } = useContext(cartContex);

  const hendlebtnaddtocart = () => {
    addcart(food);
    setincart(true);
  };
  return (
    <button
      onClick={hendlebtnaddtocart}
      disabled={incart}
      className="bg-amber-300 font-bold rounded-2xl text-black p-2 disabled:bg-blue-900 disabled:text-white"
    >
      {incart ? "Added" : "Add To Cart"}
    </button>
  );
};

export default BtnAddToCard;