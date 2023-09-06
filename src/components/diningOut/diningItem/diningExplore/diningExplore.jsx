import React from "react";
import DiningexploreCard from "./diningexploreCard/diningexploreCard";

const DiningExplore = ({ collectionName }) => {
  return (
    <div>
      <div className="lg:mx-72 py-5 text-4xl">{collectionName}</div>
      <div className=" lg:mx-32 items-center grid grid:cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DiningexploreCard />
      </div>
    </div>
  );
};

export default DiningExplore;
