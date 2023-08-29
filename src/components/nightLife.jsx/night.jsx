import React from "react";
import NightItem from "./nightItem/nightItem";
import NightFilter from "../common/filters/nightFilter";
import Hero from "../diningOut/diningItem/hero";
import NightExplore from "./nightItem/nightExplore/nightExplore";
import ExploreOption from "../common/exploreOption/exploreOption";
import Footer from "../common/footer/footer";

const NightLife = () => {
  return (
    <div>
      <NightItem />
      <NightFilter />
      <Hero />
      <NightExplore collectionName="Nightlife Restaurants in" />
      <ExploreOption />
      <Footer />
    </div>
  );
};

export default NightLife;
