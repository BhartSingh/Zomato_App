// import React from "react";
// import { restaurants } from "../../../../data/restaurants";

// const DeliveryExplore = ({ handle }) => {
//   // const { handle, ...others } = props;

//   function handleOrder() {
//     alert("Are you sure");
//     setTimeout(() => {
//       alert("order success");
//     }, 2000);
//   }
//   // Hero-section
//   return (
//     <div className="max-w-[1640px]  p-4">
//       <div className=" max-w-[1640px] m-auto  ">
//         <h1 className=" font-bold text-4xl lg:mx-52">
//           Delivery Restaurants in Gurugram
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-4">
//         {restaurants.map((item) => (
//           <div>
//             <div
//               key={item.id}
//               item={item}
//               className="border shadow-lg mx-auto w-full rounded-lg hover:scale-105 duration-300"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-60 object-cover rounded-t-lg"
//               />
//               <div className="block justify-between px-2 py-4">
//                 <div className=" ">
//                   <div className="flex">
//                     <p className="font-bold">{item.title}</p>
//                     <p className="pl-1 my-1 text-sm bg-green-700 text-white font-bold rounded-lg ml-60">
//                       {item.rating}
//                     </p>
//                   </div>
//                   <p className="flex">
//                     <h3>{item.description}</h3>
//                     <span className="  p-1 rounded-xl">{item.price}</span>
//                   </p>
//                   <span>{item.time}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default DeliveryExplore;
