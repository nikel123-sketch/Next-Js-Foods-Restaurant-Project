import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
    
  return (
    <div className="border rounded-xl shadow-md p-3 sm:p-4 hover:shadow-xl transition bg-white">
      {/* Image */}
      <div className="relative w-full h-40 sm:h-44 md:h-48">
        <Image
          src={food.image}
          alt={food.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1 sm:space-y-2">
        <h2 className="text-lg sm:text-xl font-semibold">{food.name}</h2>

        <p className="text-xs sm:text-sm text-gray-500">{food.category}</p>

        <div className="flex justify-between items-center">
          <span className="text-base sm:text-lg font-bold text-orange-500">
            ${food.price}
          </span>

          <span className="text-sm sm:text-base text-yellow-500">
            ⭐ {food.rating}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-3">
        <button className="flex-1 bg-orange-500 text-white py-1.5 sm:py-2 text-sm sm:text-base rounded-lg hover:bg-orange-600 transition">
          Add to Cart
        </button>

        <Link
          href={`/foods/${food.slug}`}
          className="flex-1 text-center border border-orange-500 text-orange-500 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg hover:bg-orange-500 hover:text-white transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
