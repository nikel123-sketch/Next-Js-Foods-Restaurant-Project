import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="border rounded-xl shadow-md p-4 animate-pulse">
      <div className="bg-gray-300 h-40 w-full rounded-md mb-4"></div>

      <div className="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>

      <div className="bg-gray-300 h-4 w-1/2 rounded mb-2"></div>

      <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
    </div>
  );
};

export default FoodCardSkeleton;
