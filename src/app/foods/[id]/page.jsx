import React from "react";
import Link from "next/link";


const getdata = async () => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`,
  );
  const data = await res.json();
  return data.foods;
};





const FoodDetails = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { id } = await params;
  // console.log(id)
  const foodsdata = await getdata();

  const food = foodsdata.find((item) => item.id === parseInt(id));


  console.log(food)

  if (!food) {
    return (
      <div className="flex items-center justify-center mt-20">
        <h1 className="text-2xl font-bold text-red-500">Food not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-6 bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-64 sm:h-72 md:h-80 lg:h-auto">
          <img
            src={food.foodImg}
            alt={food.title || "Food Image"}
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="p-4 sm:p-6 flex flex-col justify-between lg:w-1/2">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              {food.title}
            </h1>
            <p className="text-md sm:text-lg text-gray-500">{food.category}</p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500 mt-2">
              ${food.price}
            </p>
          </div>

          <Link
            href={"/foods"}
            className="mt-6 inline-block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 sm:text-lg md:text-xl"
          >
            Back to All Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
