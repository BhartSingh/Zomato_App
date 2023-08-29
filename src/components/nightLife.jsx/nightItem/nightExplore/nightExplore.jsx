import React from "react";
import NightexploreCard from "./nightexploreCard/nightexploreCard";

const NightExplore = ({ collectionName }) => {
  return (
    <div>
      <div className="mx-72 pt-3 text-4xl">{collectionName}</div>
      <div className=" mx-52  grid grid-cols-3 gap-4">
        <NightexploreCard />
      </div>
    </div>
  );
};

export default NightExplore;
