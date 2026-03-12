"use client"
import React, { useState } from 'react';

const AddToCard = () => {
    const [incart,setincart]=useState(false)
    const hendleAddtoCart=()=>{
        setincart(true)
    }
    return (
      <button
        onClick={hendleAddtoCart}
        disabled={incart}
        className="flex-1 bg-orange-500 text-white py-2 text-sm font-medium rounded-lg hover:bg-orange-600 transition disabled:bg-amber-100  disabled:text-black"
      >
        {incart ? "Added" : "Add to Cart"}
       
      </button>
    );
};

export default AddToCard;