import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NightFilterCard = () => {
  return (
    <div className="bg-black/70 h-[920px]">
      <div className="lg:mx-[450px] pt-40">
        <div className=" shadow-lg  bg-white lg:w-[700px] lg:h-[520px] rounded-lg">
          <div className="flex pt-4 ">
            <h1 className="text-3xl font-bold mx-5">Filters</h1>
            <div className="lg:mx-[535px] mx-60 sm:mx-[500px] md:mx-[600px] my-1">
              <Link to="/night">
                <RiCloseLine size={30} />
              </Link>
            </div>
          </div>
          <div className="lg:ml-6  pt-5 ">
            <button className="w-full h-12 rounded-md text-gray-300">
              _________________________________________________
            </button>
          </div>
          <div className=" flex text-lg sm:text-xl">
            <div className=" shadow-sm w-48 cursor-pointer ">
              <div className="my-5 mx-6">
                <h1 className="text-gray-500 font-bold">Sort by</h1>
                <span className="text-red-500 font-bold">Popularity</span>
              </div>
              <div className="bg-gray-100 h-60 ">
                <h2 className="my-8 mx-6 text-gray-500 font-bold">Cuisines</h2>
                <h3 className="my-10 mx-6 text-gray-500 font-bold">Rating</h3>
                <h4 className="my-10 mx-6 text-gray-500 font-bold">
                  Cost per person
                </h4>
                <h5 className="my-10 mx-6 text-gray-500 font-bold">
                  More filter
                </h5>
              </div>
            </div>
            <div className="mx-3">
              <ul className=" h-[340px] text-lg sm:text-xl">
                <div className="flex pt-5">
                  <li className="pt-2 text-xl ">
                    <input
                      type="radio"
                      name="listGroupRadio"
                      id="firstRadio"
                      className="w-5 h-5 sm:mx-5 mx-1"
                    />
                    <label htmlFor="firstRadio">Popularity</label>
                  </li>
                </div>
                <li className="pt-5">
                  <input
                    type="radio"
                    name="listGroupRadio"
                    id="secondRadio"
                    className="w-5 h-5 sm:mx-5 mx-1 "
                  />
                  <label htmlFor="secondRadio">Rating: High to Low</label>
                </li>
                <li className="pt-5">
                  <input
                    type="radio"
                    name="listGroupRadio"
                    id="thirdRadio"
                    className="w-5 h-5 sm:mx-5 mx-1 "
                  />
                  <label for="thirdRadio">Cost: Low to High</label>
                </li>
                <li className="pt-3">
                  <input
                    type="radio"
                    name="listGroupRadio"
                    id="secondRadio"
                    className="w-5 h-5 sm:mx-5 mx-1"
                  />
                  <label htmlFor="secondRadio">Cost: High to Low</label>
                </li>
                <li className="pt-3">
                  <input
                    type="radio"
                    name="listGroupRadio"
                    id="secondRadio"
                    className="w-5 h-5 sm:mx-5 mx-1"
                  />
                  <label htmlFor="secondRadio">Distance</label>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
          <div>
            <hr />
            <div className="my-1 lg:pl-[480px] pl-40">
              <Link to="/night">
                <button className="bg-gray-100 h-10 w-24 hover:bg-gray-300 rounded-lg ">
                  Clear all
                </button>
              </Link>
              <Link to="/night">
                <button className="bg-red-500 hover:bg-red-600 text-white h-10 w-24 rounded-lg mx-3">
                  Apply
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightFilterCard;
