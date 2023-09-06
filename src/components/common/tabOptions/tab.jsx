import React from "react";
import { tabs } from "../../../data/TabData";

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="md:mx-5">
      <div className="pt-5 ">
        <h1 className="lg:mx-72 mx-2 text-gray-500 ">
          <span className=" hover:text-red-500 cursor-pointer"> Home </span> /
          <span className=" hover:text-red-500 cursor-pointer"> India </span> /
          <span className=" hover:text-red-500 cursor-pointer">
            {" "}
            Delhi NCR{" "}
          </span>
          /<span className="text-gray-400 cursor-pointer"> Restaurants</span>
        </h1>
      </div>
      <div className=" flex h-20 ">
        <div className="lg:mx-72 mx-2  my-8 ">
          <div className="flex shadow-sm h-0 ">
            {tabs.map((tab) => {
              return (
                <div>
                  <div
                    onClick={() => setActiveTab(tab.name)}
                    className={`tab-item absolute-center cursor-pointer ${
                      activeTab === tab.name && "active-tab"
                    }`}
                  >
                    <div className="flex lg:mx-5 mx-2 ">
                      <div className=" h-8 w-8 ">
                        <img
                          src={
                            activeTab === tab.name
                              ? tab.active_img
                              : tab.inactive_img
                          }
                          alt={tab.name}
                        />
                      </div>

                      <div className="mx-0 sm:mx-5  pt-2 text-xl font-bold text-gray-600">
                        {tab.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TabOptions;
