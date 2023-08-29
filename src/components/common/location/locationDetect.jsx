import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const LocationDetect = () => {
  return (
    <div className="my-5">
      <div className="shadow-lg h-20 w-72  border-solid border-2 border-gray-300 rounded-t-xl mx-[360px]">
        <div className="mx-3 my-4">
          <div className=" flex">
            <BiCurrentLocation size={20} className="text-red-500" />
            <h1 className="text-red-500 mx-3">Detect current location</h1>
            <Link to="/" className="mx-auto bg-black/20 my-1 rounded-full">
              <RiCloseLine size={20} />
            </Link>
          </div>
          <span className="text-gray-400 mx-8">Using GPS</span>
        </div>
      </div>
    </div>
  );
};

export default LocationDetect;
