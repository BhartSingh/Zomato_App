import React from "react";
import NightexploreCard from "./nightexploreCard/nightexploreCard";

const NightExplore = ({ collectionName }) => {
  return (
    <div>
      <div className="lg:mx-72 mx-3 pt-3 text-4xl">{collectionName}</div>
      <div className=" lg:mx-32 items-center grid grid:cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NightexploreCard />
      </div>
    </div>
  );
};

export default NightExplore;
