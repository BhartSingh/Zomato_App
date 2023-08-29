import React from "react";
import DiningexploreCard from "./diningexploreCard/diningexploreCard";

const DiningExplore = ({ collectionName }) => {
  return (
    <div>
      <div className="mx-72  pt-3 text-4xl">{collectionName}</div>
      <div className=" mx-48  grid grid-cols-3 gap-4">
        <DiningexploreCard />
      </div>
    </div>
  );
};

export default DiningExplore;
