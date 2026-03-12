"use client"
import ReviewsCard from "@/Component/Skeleton/ReviewsCard";
import { useEffect, useState } from "react";


const ReviewsPages   = () => {
    
    const [reviews,setreviews]=useState([]);
    console.log(reviews)
    useEffect(()=>{
        fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
          .then((res) => res.json())
          .then((data) => setreviews(data.reviews));
    },[])
    return (
      <div>
        <h1 className="font-bold text-center text-2xl underline">
          Totall Reviews {reviews.length}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {reviews.map((rev, i) => (
            <ReviewsCard key={i} rev={rev}></ReviewsCard>
          ))}
        </div>
      </div>
    );
};

export default ReviewsPages;