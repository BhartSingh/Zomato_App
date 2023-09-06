import React from "react";
import { Collapse } from "react-collapse";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import OurServices from "../../data/servicesData";
// import { exploreOptions } from "../../../data/exploreOption";

const ExploreOptionCard = (props) => {
  const { open, handleToggleButton, title, description } = props;

  return (
    <>
      <div className="border-solid border-2 border-gray-300  bg-gradient-to-r  w-full pt-1 rounded-md group   ">
        <div className="flex justify-start gap-2 p-2 shadow-lg bg-white rounded-md  ">
          <div className="flex flex-col justify-start  ">
            <div
              className="flex justify-between cursor-pointer "
              onClick={handleToggleButton}
            >
              <h3 className="text-xl align-middle text-gray-600 py-2  ">
                {title}
              </h3>
              <div className=" text-xl my-3   cursor-pointer">
                {open ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
              </div>
            </div>
            <Collapse isOpened={open}>
              <p className="py-5 cursor-pointer text-gray-500">{description}</p>
            </Collapse>
          </div>
        </div>
      </div>
      <div />
    </>
  );
};

export default ExploreOptionCard;
