import React from "react";
import Filter from "../common/filters/filter";
import DeliveryItem from "./deliveryCollection/deliveryItems/deliveryItem";
import Brand from "./deliveryCollection/deliveryItems/Brand";
import ExploreSection from "../common/exploreSection/explore";
import ExploreOption from "../common/exploreOption/exploreOption";
import Footer from "../common/footer/footer";
// import DeliveryExplore from "./deliveryCollection/deliveryExplore/deliveryExplore";

const Delivery = () => {
  return (
    <div>
      <div>
        <Filter />
        <DeliveryItem />
        <Brand />
        {/* <DeliveryExplore /> */}
        <ExploreSection collectionName="Delivery Restaurants in Gurugram" />
        <ExploreOption />
        <Footer />
      </div>
    </div>
  );
};

export default Delivery;
