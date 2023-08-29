import React from "react";
import ExploreCard from "./exploreCard/exploreCard";

const ExploreSection = ({ collectionName }) => {
  return (
    <div>
      <div className="mx-72  pt-3 text-4xl">{collectionName}</div>
      <div className=" mx-48  grid grid-cols-3 gap-4">
        <ExploreCard />
      </div>
    </div>
  );
};

export default ExploreSection;
