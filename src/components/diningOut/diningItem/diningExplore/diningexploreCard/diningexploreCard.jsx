import React from "react";
import { diningCards } from "../../../../../data/diningCard";

const DiningexploreCard = () => {
  return (
    <>
      {diningCards.map((item) => {
        return (
          <div className="p-5 ">
            <div className=" hover:shadow-2xl h-80 w-full rounded-xl">
              <div className=" my-5 mx-3 cursor-pointer">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full rounded-2xl "
                  />
                </div>
                {/* <div className="top-[1265px] absolute flex">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png"
                    alt=""
                    className="h-5 absolute mx-3"
                  />
                  <span className="text-amber-600 w-40 pl-9 bg-black ">
                    {item.flat}
                  </span>
                </div> */}

                <div className="flex">
                  <h1>{item.title} </h1>
                  <div className="pl-40 sm:pl-28 md:pl-44 lg:pl-16 xl:pl-32 2xl:pl-52">
                    <span className="pl-1 my-1 text-sm bg-green-700 text-white font-bold rounded-lg">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <div className="flex ">
                  <h3>{item.description}</h3>
                  <span className=" pl-20 sm:pl-16 md:pl-24 lg:pl-2 xl:pl-28">
                    {item.price}
                  </span>
                </div>
                <p className="pl-60 sm:pl-52 md:pl-64 lg:pl-40 xl:pl-72">
                  {item.time}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DiningexploreCard;
