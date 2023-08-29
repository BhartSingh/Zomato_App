import React from "react";
import DiningItem from "./diningItem/diningItem";
import Hero from "./diningItem/hero";
import DiningExplore from "./diningItem/diningExplore/diningExplore";
import DiningFilter from "../common/filters/diningFilter";
import ExploreOption from "../common/exploreOption/exploreOption";
import Footer from "../common/footer/footer";

const DiningOut = (index) => {
  return (
    <div>
      <DiningItem />
      <DiningFilter />
      <Hero />
      <DiningExplore collectionName="Trending dining restaurants in" />
      <ExploreOption />
      <Footer />
    </div>
  );
};

export default DiningOut;
