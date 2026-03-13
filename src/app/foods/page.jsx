
import FoodCard from '@/Component/Card/FoodCard';
import React from 'react';
import CartItems from './[id]/CartItems';
import InputSearch from '@/Component/InputSearch';



const getfoods = async ({ search }) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
  );

  const data = await res.json();

  return data.foods;
};

const FoodsPages =async ({searchParams}) => {
  await new Promise((resolve)=>setTimeout(resolve,500))

  const {search=''}=await searchParams;
  console.log(search)
const foodsdata = await getfoods({search});
console.log(foodsdata)
        
      
    return (
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <h1 className="mb-4 font-bold text-lg sm:text-xl md:text-2xl underline ">
            Total Foods {foodsdata.length}
          </h1>

         <InputSearch></InputSearch>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foodsdata.map((food) => (
              
              <FoodCard key={food.id} food={food} />
            ))}
          </div>

          <div className=" w-[200px] border-2 p-4">
            <h1 className="mb-4 font-bold text-lg sm:text-xl md:text-2xl underline ">
              Add To Cart
            </h1>

            <CartItems></CartItems>
          </div>
        </div>
      </div>
    );
};

export default FoodsPages;