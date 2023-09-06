import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="bg-black/70 h-[920px] w-full ">
      <div className="lg:mx-[600px]  pt-36 ">
        <div className=" shadow-xl bg-white rounded-xl lg:h-[500px] lg:w-[450px] w-full">
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
            <div className="mx-5">
              <div className="flex shadow-xl h-9 bg-gray-100 w-full ">
                <div className="pt-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/321/321238.png"
                    alt="flag"
                    className="h-6  pl-2 "
                  />
                </div>
                <span className="pt-2 lg:pl-5 ">+91 </span>
                <div className="pt-3 mx-3 cursor-pointer">
                  <AiOutlineDown size={15} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  className="  bg-gray-50 border-slate-300 placeholder-slate-400 focus:outline-none
                 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="lg:ml-6 mx-5 pt-10">
              <Link to="/">
                <button className=" bg-red-500 text-white w-full h-12 rounded-md">
                  Send One Time Password
                </button>
              </Link>
            </div>

            <div className="lg:ml-6 mx-4 pt-5 ">
              <button className="   w-full h-12 rounded-md text-gray-300">
                ____________________ <span className="font-bold">or</span>{" "}
                ____________________
              </button>
            </div>

            <div className="lg:ml-6 mx-5">
              <Link to="/">
                <div className="flex bg-gray-100 h-12 pt-2 w-full rounded-lg ">
                  <div className="ml-20 sm:ml-52 md:ml-72 lg:ml-20">
                    <MdEmail
                      size={25}
                      className=" text-red-500 cursor-pointer"
                    />
                  </div>
                  <button className="flex text-xl text-gray-500">
                    Continue with Email
                  </button>
                </div>
              </Link>
            </div>

            <div className="mx-5 my-8 ">
              <Link to="/">
                <div className="flex bg-gray-100 h-12 pt-2 w-full rounded-lg  ">
                  <div className="ml-20 sm:ml-52 md:ml-72 lg:ml-20">
                    <FcGoogle
                      size={25}
                      className=" text-red-500 cursor-pointer"
                    />
                  </div>
                  <button className="flex text-xl text-gray-500">
                    Continue with Google
                  </button>
                </div>
              </Link>
              <span className="text-gray-300">
                _____________________________________________
              </span>
              <div className="my-8 text-xl">
                <span className="text-gray-600">New to Zomato? </span>
                <Link to="/signUp">
                  <button className="text-red-500 pl-1 cursor-pointer ">
                    Create account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
