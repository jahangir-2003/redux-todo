import React from "react";
import { ProductType } from "../Redux/Slices/ProductSlice";
import Rating from "./Rating.tsx";
import { BiHeart } from "react-icons/bi";

const ProductCart = ({ item }: { item: ProductType }) => {
  return (
    <div className="flex flex-col w-[350px] relative border-2 shadow-sm hover:shadow-lg hover:shadow-blue-900 transition-all duration-700 rounded-md shadow-red-500">
      <div className="bg-slate-200 ">
        <img
          src={item.image}
          alt={item.title}
          className="w-[250px] h-[250px] object-contain p-3 mix-blend-multiply mx-auto"
        />
      </div>
      <button className="absolute top-3 right-5">
        <span className="bg-slate-200 hover:bg-purple-700 hover:text-white flex transition-all duration-700 hover:shadow-lg  w-8 h-8 items-center justify-center rounded-full ">
          <BiHeart size={25} />
        </span>
      </button>

      <div className="flex flex-col p-3 gap-4">
        <h2 className="">{item.title}</h2>
        <h2>$ {item.price}</h2>
        <h2 className="text-slate-500 text-sm">
          {item.description.slice(0, 150)}
          {item.description.length > 150 && "..."}
        </h2>
        <Rating rate={item.rating.rate} count={item.rating.count} />
      </div>
    </div>
  );
};

export default ProductCart;
