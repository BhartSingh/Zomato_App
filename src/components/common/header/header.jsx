import React, { useState } from "react";
import { TiLocation } from "react-icons/ti";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="flex">
      <div className="pt-5">
        <img
          className=" h-7 pl-72 "
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Zomato-logo"
        />
      </div>
      <div className="w-[720px] pt-2 pl-5">
        <div className="flex shadow-md h-14 rounded-lg  ">
          {/* <Link to="/location">
            <div className="pt-4 flex">
              <TiLocation size={25} className="text-red-400 " />
              <div>Gurugram</div>
              <div className="ml-40 cursor-pointer">
                <AiFillCaretDown size={20} />
              </div>
            </div>
          </Link> */}

          <div>
            <button
              className="flex mx-2 my-4 text-gray-400"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <TiLocation size={25} className="text-red-400 " />
              <div>Block B, Jaypee Green... </div>
              {!isOpen ? (
                <AiFillCaretDown className="h-6 mx-2" />
              ) : (
                <AiFillCaretUp className="h-6 mx-2" />
              )}
            </button>
            {isOpen && (
              <div className=" absolute top-12">
                <div className="my-5">
                  <div className="shadow-lg h-20 w-72 bg-white  border-solid border-2 border-gray-300 rounded-t-xl mx-auto">
                    <div className="mx-3 my-3 ">
                      <div className=" flex">
                        <BiCurrentLocation
                          size={20}
                          className="text-red-500 cursor-pointer"
                        />
                        <h1 className="text-red-500 mx-3 cursor-pointer">
                          Detect current location
                        </h1>
                        <a
                          href="/"
                          className="mx-auto bg-gray-100 my-1 rounded-full"
                        >
                          <RiCloseLine size={20} />
                        </a>
                      </div>
                      <span className="text-gray-400 mx-8 cursor-pointer">
                        Using GPS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-3">
            <span className="text-gray-300 text-2xl ">|</span>
          </div>
          <div className="flex">
            <div className="pt-4 ml-5 text-gray-400">
              <BiSearch size={25} />
            </div>
            <div className=" pt-3 pl-3">
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-80 h-8 outline-none "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 mx-8 text-xl text-gray-500">
        <Link to="/logIn">
          <button className="ml-10"> Log in</button>
        </Link>
        <Link to="/signUp">
          <button className="ml-10"> Sign up</button>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Header;
