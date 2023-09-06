import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className=" cursor-pointer mx-4 lg:mx-64">
        <Link to="/">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
            alt="hero"
            className="h-60 w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
