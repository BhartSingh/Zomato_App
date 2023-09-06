import React from "react";
import { nightCards } from "../../../../../data/nightCard";

const NightexploreCard = () => {
  return (
    <>
      {nightCards.map((item) => {
        return (
          <div className="p-2 ">
            <div className=" hover:shadow-2xl h-[360px] w-[375px] rounded-xl">
              <div className=" my-5 mx-3 cursor-pointer">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full rounded-2xl my-3 "
                  />
                </div>
                {/* <div className="top-[1290px] absolute flex">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png"
                    alt=""
                    className="h-5 absolute mx-3 "
                  />
                  <span className="text-amber-600 w-40 pl-9 bg-black ">
                    {item.flat}
                  </span>
                </div> */}

                <div className="flex">
                  <h1>{item.title} </h1>
                  <div className="pl-52">
                    <span className="pl-1 my-1 text-sm bg-green-700 text-white font-bold rounded-lg">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <div className="flex ">
                  <h3 className="text-gray-600">{item.description}</h3>
                  <span className=" pl-36">{item.price}</span>
                </div>
                <div>
                  <span className="text-gray-400">{item.Comment}</span>
                </div>
                <div className="flex">
                  <p className="text-red-500">{item.time}</p>
                  <span className="pl-44">{item.distance}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NightexploreCard;
