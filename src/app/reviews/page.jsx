"use client";

import ReviewsCard from "@/Component/Card/ReviewsCard";
import { useEffect, useState } from "react";
import ReviewsLoading from "./loading";

const ReviewsPages = () => {
  const [reviews, setreviews] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setreviews(data.reviews);
        setloading(false); 
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="font-bold text-center text-2xl underline mb-6">
        Total Reviews {reviews.length}
      </h1>

      {/* Skeleton দেখাবো যদি loading true থাকে */}
      {loading ? (
        <ReviewsLoading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews.map((rev, i) => (
            <ReviewsCard key={i} rev={rev} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsPages;
