import React, { useState } from "react";
import ExploreOptionCard from "./exploreoptionCard";
import { exploreOptions } from "../../../data/exploreOption";

const ExploreOption = () => {
  const [open, setOpen] = useState(false);

  const handleToggleButton = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="bg-gray-50">
      <section id="services" className="container mx-auto ">
        <div id="service" className="flex mx-48  mt-14">
          <span className="  font-semibold text-3xl mt-10" data-aos="fade-up">
            Explore options near me
          </span>
        </div>
        <div
          className="flex flex-col gap-4 px-7 w-full py-7"
          data-aos="fade-up"
        >
          {exploreOptions.map((data, index) => (
            <ExploreOptionCard
              {...data}
              key={index}
              open={index === open}
              handleToggleButton={() => handleToggleButton(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExploreOption;
