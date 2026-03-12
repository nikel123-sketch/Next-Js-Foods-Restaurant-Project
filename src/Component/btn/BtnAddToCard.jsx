"use client"
import { cartContex } from '@/contex/CartProvider';
import React, { use, useState } from 'react';

const BtnAddToCard = () => {
    const [incart,setincart]=useState(false)
    const{addcart}=use(cartContex)
    const hendlebtnaddtocart=({food})=>{
        addcart(food)
        setincart(true)
    }
    return (
      <button
      onClick={hendlebtnaddtocart}
      disabled={incart}
      className="bg-amber-300 font-bold rounded-2xl text-black p-2 disabled:bg-blue-900 disabled:text-white">
        {
            incart?"Added":"Add To Cart"
        }
       
      </button>
    );
};

export default BtnAddToCard;