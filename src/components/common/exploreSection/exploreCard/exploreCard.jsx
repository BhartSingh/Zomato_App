import React from "react";
import { restaurants } from "../../../../data/restaurants";

const ExploreCard = () => {
  return (
    <>
      {restaurants.map((item) => {
        return (
          <div className="p-5 ">
            <div className=" hover:shadow-2xl h-80 w-[375px] rounded-xl">
              <div className=" my-5 mx-3 cursor-pointer">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full rounded-2xl "
                  />
                </div>
                <div className="top-[1190px] absolute">
                  <span className="bg-red-500 text-white ">
                    {item.proOffer}
                  </span>{" "}
                </div>
                <div className="top-[1220px] absolute">
                  <p className="bg-blue-500 text-white w-20  ">{item.offer}</p>
                </div>

                <div className="flex">
                  <h1>{item.title} </h1>
                  <div className="pl-56">
                    <span className="pl-1 my-1 text-sm bg-green-700 text-white font-bold rounded-lg">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <div className="flex ">
                  <h3>{item.description}</h3>
                  <span className=" pl-28">{item.price}</span>
                </div>
                <p className="pl-72">{item.time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ExploreCard;
