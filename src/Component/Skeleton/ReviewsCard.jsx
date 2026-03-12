"use client";
import React, { useState } from "react";

const ReviewsCard = ({ rev }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="flex gap-4 p-4 border rounded-lg shadow-sm hover:shadow-lg transition">
      {/* User Photo */}
      <div className="flex-shrink-0">
        <img
          src={rev.photo}
          alt={rev.user}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* Review Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-green-400">{rev.user}</h3>
          <p className="text-sm text-amber-200">{rev.email}</p>
        </div>

        <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-fuchsia-500">{rev.comment}</p>

          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition 
              ${liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            ❤️ Like {likeCount > 0 && <span>({likeCount})</span>}
          </button>
        </div>

        <div className="mt-1 text-yellow-500 font-medium flex items-center gap-1">
          ⭐ {rev.rating}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
