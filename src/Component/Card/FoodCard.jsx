import Image from "next/image";
import Link from "next/link";
import React from "react";
import BtnAddToCard from "../btn/BtnAddToCard";


const FoodCard = ({ food }) => {
  
  const { category, foodImg, price, title, id } = food;
 
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden">
        <img
          src={foodImg || "/images/fallback.jpg"}
          alt={food.name || "Food item"}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-500">{category}</p>
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>


        <div className="flex justify-between items-center pt-1">
          <span className="text-lg font-bold text-orange-500">
            ${price}
          </span>

          <span className="flex items-center gap-1 text-sm font-medium text-yellow-500">
            ⭐ {food.rating}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 p-4 pt-0">
        <BtnAddToCard food={food}></BtnAddToCard>

        <Link
          href={`/foods/${id}`}
          className="flex-1 text-center border border-orange-500 text-orange-500 py-2 text-sm font-medium rounded-lg hover:bg-orange-500 hover:text-white transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
