import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="bg-black/70 h-[821px] ">
      <div className="mx-[600px]  pt-36 ">
        <div className=" shadow-xl bg-white rounded-xl h-[500px] w-[450px]">
          <div className="flex">
            <h1 className="text-3xl font-bold text-gray-600 mx-5 my-3-5">
              Login
            </h1>
            <div className="pt-5 mx-auto mr-5 cursor-pointer">
              <Link to="/">
                <RiCloseLine size={30} />
              </Link>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex shadow-xl h-9 bg-gray-100 ">
              <div className="pt-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/321/321238.png"
                  alt="flag"
                  className="h-6 pl-5 "
                />
              </div>
              <span className="pt-2 pl-5">+ 91 </span>
              <div className="pt-3 pl-2 cursor-pointer">
                <AiOutlineDown size={15} />
              </div>
              <input
                type="tel"
                name="phone"
                className="mt-1 ml-5 bg-gray-50 border-slate-300 placeholder-slate-400 focus:outline-none
                 focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1"
                placeholder="Phone"
                required
              />
            </div>
            <div className="ml-6 pt-10">
              <button className=" bg-red-500 text-white w-[400px] h-12 rounded-md">
                Send One Time Password
              </button>
            </div>
            <div className="flex pt-5 pb-5 ml-10 w-full">
              <span className="text-gray-300 ">______________________</span>
              <p>or</p>
              <span className="text-gray-300">______________________</span>
            </div>
            <div className="ml-6">
              <div className="flex bg-gray-100 h-12 pt-2 w-[400px] rounded-lg ">
                <div className="ml-20">
                  <MdEmail size={25} className=" text-red-500 cursor-pointer" />
                </div>
                <button className="flex text-xl text-gray-500">
                  Continue with Email
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex bg-gray-100 h-12 pt-2 w-[400px] rounded-lg ">
                <div className="ml-20">
                  <FcGoogle
                    size={25}
                    className=" text-red-500 cursor-pointer"
                  />
                </div>
                <button className="flex text-xl text-gray-500">
                  Continue with Google
                </button>
              </div>
              <span className="text-gray-300">
                __________________________________________________
              </span>
              <div className="mt-8">
                <h1 className="text-gray-600">
                  New to Zomato?
                  <button className="text-red-500 pl-1 cursor-pointer ">
                    Create account
                  </button>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
