import React from "react";

const DeliveryItem = () => {
  return (
    <div className=" shadow-sm bg-gray-100 w-full  lg:h-80 h-[840px] sm:h-[550px]  ">
      <div>
        <div className="lg:mx-72 mx-4 pt-10 text-4xl">
          Inspiration for your first order
        </div>
        <div className=" shadow-sm lg:mx-52">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:flex lg:mx-0  ">
            <div className="p-5">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
                alt=""
                className="h-40  w-full rounded-full cursor-pointer"
              />
              <div className="text-xl mx-10 my-2 text-gray-800 cursor-pointer">
                Pizza
              </div>
            </div>
            <div className="p-5">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
                alt=""
                className="h-40 w-full rounded-full cursor-pointer"
              />
              <div className="text-xl mx-10 my-2 text-gray-800 cursor-pointer">
                Dosa
              </div>
            </div>
            <div className="p-5">
              <img
                src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
                alt=""
                className="h-40 w-full cursor-pointer "
              />
              <div className="text-xl mx-10 my-2 text-gray-800 cursor-pointer">
                Burger
              </div>
            </div>
            <div className="p-5">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
                alt=""
                className="h-40 w-full rounded-full cursor-pointer"
              />

              <div className="text-xl mx-3 flex my-2 text-gray-800 cursor-pointer ">
                <span>North-</span>
                <span>Indian</span>
              </div>
            </div>
            <div className="p-5 ">
              <img
                src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
                alt=""
                className="h-40 w-full cursor-pointer"
              />
              <div className="text-xl mx-10 my-2 text-gray-800 cursor-pointer">
                Chicken
              </div>
            </div>
            <div className="p-5">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/1ab6211f526df5d920d41787907d1a051632716576.png"
                alt=""
                className="h-40 w-full rounded-full cursor-pointer"
              />
              <div className="text-xl mx-10 my-2 text-gray-800 cursor-pointer">
                Poha
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeliveryItem;
