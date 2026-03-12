import React from "react";

const ReviewsLoadingSkeleton = () => {
  return (
    <div className="flex gap-4 p-4 border rounded-lg shadow-sm animate-pulse">
      {/* User Photo Skeleton */}
      <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>

      {/* Content Skeleton */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>{" "}
          {/* User Name */}
          <div className="h-3 bg-gray-200 rounded w-1/2"></div> {/* Email */}
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div className="h-3 bg-gray-300 rounded w-2/3"></div> {/* Comment */}
          <div className="w-20 h-6 bg-gray-200 rounded"></div>{" "}
          {/* Like button */}
        </div>
        <div className="mt-1 h-3 bg-gray-300 rounded w-1/4"></div>{" "}
        {/* Rating */}
      </div>
    </div>
  );
};

export default ReviewsLoadingSkeleton;
