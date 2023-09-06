import React from "react";

const Brand = () => {
  return (
    <div>
      <div className="lg:mx-72 mx-10  pt-10 text-4xl ">Top brands for you</div>
      <div className=" shadow-sm lg:mx-52">
        <div className=" lg:mx-0 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:flex w-full ">
          <div className="p-5">
            <div className="shadow-xl rounded-full">
              <img
                src="https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png"
                alt=""
                className="h-40 w-full  rounded-full "
              />
            </div>

            <div className="my-2">
              <span className="text-lg mx-4 text-gray-800 cursor-pointer">
                McDonald's
              </span>
              <p className="text-md mx-8 text-gray-600 cursor-pointer">
                27 min
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className=" shadow-xl  rounded-full">
              <img
                src="https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp"
                alt=""
                className="h-40 w-full  rounded-full"
              />
            </div>
            <div className="my-2">
              <span className="text-lg mx-auto  text-gray-800 cursor-pointer">
                Domino's Pizza
              </span>
              <p className="text-md mx-8 text-gray-600 cursor-pointer">
                35 min
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className=" shadow-xl h-40 w-40 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png"
                alt=""
                className="h-36 full rounded-full mx-2 "
              />
            </div>
            <div className="my-2">
              <span className="text-lg mx-8 text-gray-800 cursor-pointer">
                Haldiram's
              </span>
              <p className="text-md mx-12  text-gray-600 cursor-pointer">
                30 min
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className=" shadow-xl h-40 w-40 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png"
                alt=""
                className="h-36 w-full rounded-full mx-auto "
              />
            </div>
            <div className="my-2">
              <span className="text-lg mx-8 text-gray-800 cursor-pointer">
                Bikanervala
              </span>
              <p className="text-md mx-12  text-gray-600 cursor-pointer">
                25 min
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className=" shadow-xl h-40 w-full rounded-full">
              <img
                src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png"
                alt=""
                className="h-36 w-full rounded-full mx-auto pt-10  "
              />
            </div>
            <div className="my-2">
              <span className="text-lg mx-16  text-gray-800 cursor-pointer">
                KFC
              </span>
              <p className="text-md mx-12  text-gray-600 cursor-pointer">
                28 min
              </p>
            </div>
          </div>

          <div className="p-5">
            <div className="shadow-xl h-40 w-full rounded-full">
              <img
                src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp"
                alt=""
                className="h-40 w-full mx-auto rounded-full "
              />
            </div>
            <div className="my-2">
              <span className="text-lg mx-5 text-gray-800 cursor-pointer">
                Burger King
              </span>
              <p className="text-md mx-12 text-gray-600 cursor-pointer">
                34 min
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
