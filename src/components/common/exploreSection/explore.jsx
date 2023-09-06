import React from "react";
import ExploreCard from "./exploreCard/exploreCard";

const ExploreSection = ({ collectionName }) => {
  return (
    <div>
      <div className="lg:mx-72 mx-4  pt-3 text-4xl">{collectionName}</div>
      {/* {collectionName} */}
      {/* <div className="shadow-xl w-full  "> */}

      <div className="lg:mx-32 items-center grid grid:cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ExploreCard />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ExploreSection;
