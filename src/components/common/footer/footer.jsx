import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
// import { BiCurrentLocation } from "react-icons/bi";
// import { RiCloseLine } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" mx-0">
      <div className=" bg-gray-200  w-[1685px]  ">
        <div className="mx-20 ">
          <div className="flex  ">
            <div className="pr-20 ">
              <img
                className=" h-7 mx-10  my-10"
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="Zomato-logo"
              />
            </div>
            <div className="flex pl-[750px]   my-10">
              <button
                className="flex mx-2  text-gray-400 border-solid border-2 border-gray-300 rounded-md  h-9"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <div className="my-1">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAB3CAMAAACkCCtBAAAA8FBMVEX/mTMSiAf/////liz/qlpDki8GhwD/lSUAgwD+vomBsXbc3Ny1tbX8/PwAAAAAAIL09PTS0tLLy8vq6uqHh4fBwcGOjo4AAHwAAIrz8/qdnZ3g4O3Q0OXGxuB+frhPT5smJpCystMyMpYQEGYAABpzc7JYWKGHh6YTE4wAAHVERJuSksSlpaUAAFt5eZUhIV4fH5BsbI1MTExvb2lkZGR3d3egoMhBQUEzM25bW38AAGRpaa2goLH/5tT+0qz+w5T/jgD/9ez/oUf/277+tHN/f4o9PW6enrhspVq0zano7+PP4c2dvo6Pt4LM2btLl0OwA1JvAAADMElEQVR4nO2Z2W7iMBRAM6ZlS0yckI0sFLoAgdCNpAstLS1t6d7//5tJ6IxUeBkergdHukfCQolkH10715tEMujk5rYiKLc3E7qQlLJislUSmq3JX9XKtCAJTWFa+VatlDat8m9KlUx1Nt20xzpMZ0S6uxe8978p3N9Jsxx0f0ZpJj3kIqhpWB+k+007rEtuRBEEQRAEQRAEQRAEQRBERAq5QdrKDYvLoHyAqjyAV214fhD4XgO8YmjVoLnTclTVae00A+CqYVXbu6Ht7O0fHOzvOXa42watHFLV66hOrevJJmOm7HVrjtrxAKsHVA16YT8wmUxJvU6ozMygH/YARwGcaqDaNVkmJP1pGvn+V7NVOFcwVb+nDmRKFcIiouskYkShVB6oPR+qBShV6gwPWRpJRSYG1XVqEFlJ48oOhw4FagJKdaAeuUTTSd0grp7iEqNOdI24R+oAqAkgVc85zj52xSWRolmmaWlKRFwle3PsAKUBINVmeELM9NuPXHqqnUZRWlA3SvOASU7CJkwbMKqN1nDEiG5pxDCUJHbdOFEMg2iWTtho2IKZZGFUA7VP06+HWrFsJInhulkpx1b2jPaBEhaM6pl9xvTIZEQ+TwwrenyMLCM5lwkzI52lL0EagVEdjGtpqRtZv1vWxXh8YVnZSDD09HFtDJMDYFSv7Ou0pymta8YouQwdJ7xMRoZWz56Ra/sKpBEQVdpRfVmPLCuJY9d8sh3HfjLdOE4sK9JlX+2AzAL/IapnqkBRXR2rYfhzrDpA8xWXDNDtipsBlvNqMp8nwubVldlqPhd3tlpZA7Tb4q4BVlZWQSDwymp5ver7Aq9Xl3YBLAiYwLuApb1VEIi8t1rasfq+0DvWn+cAnif2OcCP05VGQ/DTFZKjM6uM3JwEZuTmfJUjqMoDaTs3SMXcIP3KDajKA1TlAaryAFV5gKo8QFUeoCoPUJUHqMoDVOUBqvIAVXmAqjxAVR7kSfW5uGmF9Sg+Sy/lTUusR/lFet3ORViL268SyUdYyy/ZtUU1B67l6uKGhVbLgo+BYrlK/1wGfX6Vhebrc3EZtLgSYm/vH1VB+Xh/YwvJ35KrxAoyIVW3AAAAAElFTkSuQmCC"
                    alt=""
                    className="h-3 mx-1 my-1 "
                  />
                </div>
                <div className="mx-1 my-1">India</div>
                {!isOpen ? (
                  <AiFillCaretDown className="h-6 my-1 " />
                ) : (
                  <AiFillCaretUp className="h-6 my-1" />
                )}
              </button>
            </div>
            <div className="my-10">
              <button
                className="flex mx-2 text-gray-400 border-solid border-2 border-gray-300 rounded-md  h-9"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <div className="my-1">
                  <img
                    src="https://img.icons8.com/?size=1x&id=3685&format=png"
                    alt=""
                    className="h-3 mx-1 my-1 "
                  />
                </div>
                <div className="mx-1 my-1"> English</div>
                {!isOpen ? (
                  <AiFillCaretDown className="h-6 my-1 " />
                ) : (
                  <AiFillCaretUp className="h-6 my-1" />
                )}
              </button>
            </div>
          </div>
          <div className="mx-10">
            <div className="grid grid-cols-5  cursor-pointer   ">
              <div className=" block">
                <h2 className="font-bold  my-4">ABOUT ZOMATO</h2>
                <div className="text-gray-500 ">
                  <a className="block">Who We Are</a>
                  <a className="block ">Blog</a>
                  <a className="block  ">Work With Us</a>
                  <a className="block"> Investor Relations</a>
                  <a className="block">Report Fraud</a>
                  <a className="block">Contact Us</a>
                </div>
              </div>
              <div className="mx-10">
                <h2 className="font-bold  my-4">ZOMAVERSE</h2>
                <div className="text-gray-500 ">
                  <a className="block ">Zomato</a>
                  <a className="block ">Blinkit</a>
                  <a className="block ">Feeding India </a>
                  <a className="block ">Hyperpure</a>
                  <a className="block "> Zomaland</a>
                </div>
                {/* </div> */}
              </div>
              <div>
                <h2 className="font-bold  my-4"> FOR RESTAURANTS</h2>
                <div className=" ">
                  <a className="flex text-gray-500">
                    <span className="">Partner With Us</span>
                  </a>
                  <a className="flex text-gray-500">
                    <span className="">App For You</span>
                  </a>
                  <a className="flex font-bold my-3"> FOR ENTERPRISES</a>
                  <a className="flex text-gray-500">Zomato for Enterprise</a>
                </div>
              </div>
              <div className="pl-10">
                <h2 className="font-bold  my-4">LEARN MORE</h2>
                <div className="text-gray-500 ">
                  <a className="flex ">Privacy</a>
                  <a className="flex ">Security</a>
                  <a className="flex ">Terms</a>
                  <a className="flex">Sitemap</a>
                </div>
              </div>
              <div>
                <div className=" ">
                  <h1 className="my-5 font-bold mx-1">SOCIAL LINKS</h1>
                  <div className="flex">
                    <ImLinkedin size={20} className=" rounded-xl  mx-1" />
                    <AiFillInstagram size={22} className="mx-1" />
                    <AiFillTwitterCircle size={22} className="mx-1" />
                    <AiFillYoutube size={22} className=" rounded-lg mx-1" />
                    <BsFacebook size={20} className="mx-1" />
                  </div>
                  <div className="mx-2">
                    <div>
                      <img
                        src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                        alt=""
                        className="h-10 my-5"
                      />
                    </div>
                    <div>
                      <img
                        src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                        alt=""
                        className="h-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className=" my-10 ">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-2023 © Zomato™
              Ltd. All rights reserved.
              <u>
                Create by
                <span className="text-blue-600 font-bold"> @Bhart Singh</span>
              </u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
