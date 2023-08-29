import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const CuisinesCard = () => {
  return (
    <>
      <div className="bg-black/70 h-[821px]">
        <div className="mx-[450px] pt-40">
          <div className=" shadow-lg  bg-white w-[500px] h-[520px] rounded-lg">
            <div className="flex pt-4 ">
              <h1 className="text-3xl font-bold mx-5">Cuisines</h1>
              <div className="mx-[300px] my-1">
                <Link to="/">
                  <RiCloseLine size={30} />
                </Link>
              </div>
            </div>
            <div className="flex border-slate-300 placeholder-slate-400  mx-9 my-5 ">
              <input
                type="text"
                class="mt-1 h-12 px-5 py-2 bg-white border shadow-sm absolute  focus:outline-none  focus:border-sky-500 focus:ring-sky-500 block w-[430px] rounded-md sm:text-sm focus:ring-1"
                placeholder=" Search here"
              />
              <div className="my-4 ">
                <CiSearch size={20} className=" absolute " />
              </div>
              <div className=" mx-[405px] my-4">
                <RiCloseLine size={20} className=" absolute" />
              </div>
            </div>
            <div className=" my-10 overflow-y-auto h-60 ">
              <div className="flex mx-10 my-8 ">
                <div class="flex items-center ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" className="mx-2 text-sm  ">
                    Algerian
                  </label>
                </div>
                <div class="flex mx-20  ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Algerian
                  </label>
                </div>
              </div>
              <div className="flex mx-10 my-8 ">
                <div class="flex items-center ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm 0">
                    Algerian
                  </label>
                </div>
                <div class="flex mx-20 ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Algerian
                  </label>
                </div>
              </div>
              <div className="flex mx-10 my-8 ">
                <div class="flex items-center ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Algerian
                  </label>
                </div>
                <div class="flex mx-20 ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Algerian
                  </label>
                </div>
              </div>
              <div className="flex mx-10 my-8 ">
                <div class="flex items-center ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Algerian
                  </label>
                </div>
                <div class="flex mx-20 ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Algerian
                  </label>
                </div>
              </div>
              <div className="flex mx-10 my-8 ">
                <div class="flex items-center ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Algerian
                  </label>
                </div>
                <div class="flex mx-20 ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Batak
                  </label>
                </div>
              </div>
              <div className="flex mx-10 my-8 ">
                <div class="flex items-center ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Algerian
                  </label>
                </div>
                <div class="flex mx-20 ">
                  <input
                    check
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checked-checkbox" class="mx-2 text-sm ">
                    Algerian
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-7 pl-64 ">
              <Link to="/">
                <button className="bg-gray-100 h-10 w-24 hover:bg-gray-300 rounded-lg ">
                  Clear all
                </button>
              </Link>
              <Link to="/">
                <button className="bg-red-500 hover:bg-red-600 text-white h-10 w-24 rounded-lg mx-3">
                  Apply
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CuisinesCard;
