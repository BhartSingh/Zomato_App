import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-black/70 h-[920px]  w-full">
      <div className="lg:mx-[600px]  pt-36 ">
        <div className=" shadow-xl bg-white rounded-xl lg:h-[500px] lg:w-[450px] w-full">
          <div className="flex">
            <h1 className="text-3xl font-bold text-gray-600 mx-5 my-3 ">
              Sign up
            </h1>
            <div className="pt-5 mx-auto mr-5 cursor-pointer">
              <Link to="/">
                <RiCloseLine size={30} />
              </Link>
            </div>
          </div>
          <div className=" mx-5 pt-5 ">
            <input
              type="name"
              name="name"
              class=" px-3 h-12 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mx-5 pt-7 ">
            <input
              type="email"
              name="email"
              class=" px-3 py-2 h-12 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Email"
              required
            />
          </div>
          <div className="mx-5 my-3">
            <input type="checkbox" id="condition" className="h-4 w-4" />
            <label htmlFor="condition" className="text-sm">
              <span className="text-gray-400 pl-2">I agree to zomata's</span>
              <span className="text-red-500 pl-1">
                Terms of Service. Privacy Policy
              </span>
              <span className="text-gray-400 pt-1"> and </span>
              <span className="text-red-500">Content Policies</span>
            </label>
          </div>
          <Link to="/">
            <div className="mx-5 pt-5">
              <button className=" bg-red-500 text-white w-full h-12 rounded-md">
                Create account
              </button>
            </div>
          </Link>
          <div className="lg:ml-6 mx-4  ">
            <button className="   w-full h-12 rounded-md text-gray-300">
              ____________________ <span className="font-bold">or</span>{" "}
              ____________________
            </button>
          </div>

          <div className="mx-6 ">
            {" "}
            <Link to="/">
              <div className="flex bg-gray-100 h-12 pt-2 w-full rounded-lg ">
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
            </Link>
            <span className="text-gray-300 w-full">
              _____________________________________________
            </span>
            <div className=" text-lg">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/logIn">
                <button className="text-red-500 mx-1 cursor-pointer ">
                  Log in
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
