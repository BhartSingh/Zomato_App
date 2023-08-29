import React, { useState } from "react";
import Header from "../components/common/header/header";
import TabOptions from "../components/common/tabOptions/tab";
import Footer from "../components/common/footer/footer";
import Delivery from "../components/delivery/delivery";
import DiningOut from "../components/diningOut/dining";
import NightLife from "../components/nightLife.jsx/night";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectionScreen(activeTab)}
      {/* <Footer /> */}
    </div>
  );
};
const getCorrectionScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <NightLife />;
    default:
      return <div>Delivery</div>;
  }
};

export default HomePage;
