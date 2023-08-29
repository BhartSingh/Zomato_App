import React from "react";
import { diningItems } from "../../../data/diningItem";
import { AiFillCaretRight } from "react-icons/ai";

const DiningItem = () => {
  return (
    <div className="bg-gray-50 h-[460px]">
      <h1 className="text-3xl pt-5 mx-72">Collections</h1>
      <div className="flex pt-5">
        <p className="text-lg pl-72">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends
        </p>
        <div className="flex mx-36 ">
          <h3 className="text-red-400  cursor-pointer">
            All collections in Delhi NCR
          </h3>
          <span className="my-1 text-red-400 mx-2 ">
            <AiFillCaretRight />
          </span>
        </div>
      </div>
      <div className="flex mx-64 cursor-pointer">
        {diningItems.map((item) => {
          return (
            <div className=" ">
              <div className="p-4">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-64 rounded-md  "
                  />
                </div>
                <div className=" top-[555px] absolute mx-3">
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
