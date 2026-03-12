// src/app/foods/[id]/FoodDetailsSkeleton.jsx
import React from "react";

const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Image Skeleton */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-300 rounded-lg"></div>

        {/* Content Skeleton */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-gray-300 rounded"></div> {/* Title */}
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>{" "}
            {/* Category */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Price & Rating Skeleton */}
          <div className="mt-6 flex items-center justify-between">
            <div className="h-6 w-20 bg-gray-300 rounded"></div>
            <div className="h-6 w-16 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
