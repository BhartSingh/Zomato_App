import React from "react";
import { diningItems } from "../../../data/diningItem";
import { AiFillCaretRight } from "react-icons/ai";

const DiningItem = () => {
  return (
    <div className="bg-gray-50 lg:h-[460px] h-[1250px] sm:h-[710px] md:h-[770px]">
      <h1 className="text-3xl pt-5 lg:mx-72 mx-5">Collections</h1>
      <div className="flex pt-5 mx-2 sm:text-lg">
        <p className=" lg:pl-72">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends
        </p>
        <div className="flex lg:mx-10 ">
          <h3 className="text-red-400  cursor-pointer">
            All collections in Delhi NCR
          </h3>
          <span className="my-1 text-red-400 mx-2 ">
            <AiFillCaretRight />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:mx-64 cursor-pointer">
        {diningItems.map((item) => {
          return (
            <div className=" ">
              <div className="p-4">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 sm:h-64 md:h-72 lg:h-80 w-full rounded-md  "
                  />
                </div>
                <div className="top-[550px] sm:top-[600px] md:top-[570px] lg:top-[555px] absolute mx-3">
                  <span className=" text-white text-xl">{item.title}</span>
                  <div className=" flex">
                    <p className="text-white">{item.places}</p>
                    <div className="my-1 text-white mx-2">
                      <AiFillCaretRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiningItem;
