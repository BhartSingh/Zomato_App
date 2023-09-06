import React from "react";
import { nightItems } from "../../../data/nightItem";
import { AiFillCaretRight } from "react-icons/ai";

const NightItem = () => {
  return (
    <div className="bg-gray-50 lg:h-[460px] h-[1270px] sm:h-[700px] md:h-[700px]">
      <h1 className="text-3xl pt-5 lg:mx-72">Collections</h1>
      <div className="flex pt-5">
        <p className="text-lg lg:pl-72">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends
        </p>
        <div className="flex lg:mx-36 ">
          <h3 className="text-red-400  cursor-pointer">
            All collections in Delhi NCR
          </h3>
          <span className="my-1 text-red-400 mx-2 ">
            <AiFillCaretRight />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:mx-64 cursor-pointer">
        {nightItems.map((item) => {
          return (
            <div className=" ">
              <div className="p-4">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full rounded-md  "
                  />
                </div>
                <div className="top-[620px] sm:top-[580px] md:top-[530px] lg:top-[535px] absolute mx-3">
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

export default NightItem;
