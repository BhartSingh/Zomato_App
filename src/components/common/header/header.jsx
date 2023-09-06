import React, { useState } from "react";
import { TiLocation } from "react-icons/ti";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
// import { AiOutlineDown } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";
// import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <div>
      <div className="lg:mx-64  ">
        <div className="block md:flex">
          <div className="pt-5 ">
            <img
              className=" h-7 sm:h-8 md:h-8 md:mx-5 lg:mx-0 "
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="Zomato-logo"
            />
          </div>
          <div className="flex">
            <div className="w-full  pt-2 sm:mx-2 ">
              <div className="flex shadow-md h-14 rounded-lg  md:w-[410px] lg:w-[570px] md:ml-10 lg:ml-2 ">
                {/* <Link to="/location">
            <div className="pt-4 flex">
              <TiLocation size={25} className="text-red-400 " />
              <div>Gurugram</div>
              <div className="ml-40 cursor-pointer">
                <AiFillCaretDown size={20} />
              </div>
            </div>
          </Link> */}

                <div className="">
                  <button
                    className="flex sm:mx-2 my-4 text-gray-400"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    <TiLocation size={25} className="text-red-400 " />
                    <div className="text-lg w-full ">
                      Block_B,_Jaypee_Green...{" "}
                    </div>
                    {!isOpen ? (
                      <AiFillCaretDown className="h-6 sm:mx-2" />
                    ) : (
                      <AiFillCaretUp className="h-6 sm:mx-2" />
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
                            <Link to="https://goo.gl/maps/vxJ9BB6oq5sSBETc9">
                              <span className="text-gray-400 mx-8 hover:text-blue-500 cursor-pointer">
                                Using GPS
                              </span>
                            </Link>
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
                  <div className="pt-4  text-gray-400">
                    <BiSearch size={25} />
                  </div>
                  <div className=" pt-3 sm:mx-2">
                    <input
                      type="text"
                      placeholder="Search for restaurant, cuisine "
                      className="w-12 sm:w-36 md:w-28 lg:w-96 h-8 outline-none text-lg "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:my-6 my-3  mx-5 text-xl text-gray-500 block sm:flex">
              <Link to="/logIn">
                <button className="sm:mx-2 md:mr-10 lg:ml-16  "> Login</button>
              </Link>
              <Link to="/signUp">
                <button className="sm:mx-2  md:mr-20"> Signup</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
