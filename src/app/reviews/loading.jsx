import ReviewsLoadingSkeleton from '@/Component/Skeleton/ReviewsLoadingSkeleton';
import React from 'react';

const ReviewsLoading = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {
            [...Array(12)].map((_ ,i)=><ReviewsLoadingSkeleton key={i}></ReviewsLoadingSkeleton>)
        }
      </div>
    );
};

export default ReviewsLoading;