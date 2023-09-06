import React from "react";
import { Link } from "react-router-dom";

const DiningFilter = () => {
  return (
    <div className="lg:mx-60  ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex mx-3 lg:my-7 cursor-pointer ">
        <div className="p-3 ">
          <div className="bg-white text-gray-500 hover:bg-gray-100  border-solid border-2 border-gray-300 h-7 w-full rounded-md flex ">
            <img
              src="data:image/png;base64,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"
              alt=""
              className="h-5  mx-1 bg-black rounded-2xl"
            />
            <Link to="/diningfilter">
              <h1 className="mx-2 ">Filters</h1>
            </Link>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-white  text-gray-500 border-solid border-2 border-gray-300 h-7 w-full rounded-md flex hover:bg-gray-100  ">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png"
              alt=""
              className="h-5  mx-1 bg-black rounded-2xl"
            />
            <Link to="/">
              <span className="mx-2">Gold</span>
            </Link>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-white text-gray-500 hover:bg-gray-100  border-solid border-2 border-gray-300 h-7 w-full rounded-md ">
            <h2 className="mx-2">Rating 4.0+</h2>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-white text-gray-500 hover:bg-gray-100  border-solid border-2 border-gray-300 h-7 w-full rounded-md ">
            <h3 className="mx-2">Outdoor Seating</h3>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-white text-gray-500 hover:bg-gray-100  border-solid border-2 border-gray-300 h-7 w-full rounded-md ">
            <h4 className="mx-2">Serves Alcohol</h4>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-white text-gray-500 hover:bg-gray-100  border-solid border-2 border-gray-300 h-7 w-full rounded-md ">
            <h5 className="mx-2"> Open Now</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningFilter;
