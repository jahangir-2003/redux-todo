import React from "react";
import {
  deleteProduct,
  ProductType,
} from "../../Redux/Slices/ProductSlice.tsx";
import Rating from "./Rating.tsx";
import { BiHeart } from "react-icons/bi";
import Button from "../../Component/Button.tsx";
import { AppDispatch } from "../../Redux/Store.tsx";
import { useDispatch } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const ProductCart = ({
  item,
  setUpdateProduct,
  isFavorate,
  handleFavorate,
  handleAddToCart,
}: {
  item: ProductType;
  setUpdateProduct: any;
  isFavorate: boolean;
  handleFavorate: any;
  handleAddToCart: any;
}) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="flex flex-col w-[320px] h-[400px] border-2 relative group duration-700 rounded-md border-slate-300 shadow-sm mx-auto">
      <Link to={`/single-product/${item.id}`} className="bg-slate-200 ">
        <img
          src={item?.image}
          alt={item?.title}
          className="w-[200px] h-[200px] object-contain p-3 mix-blend-multiply mx-auto"
        />
      </Link>
      <div className="absolute top-1/4 right-0 group-hover:right-5 opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col gap-3 items-center ">
        {isFavorate ? (
          <button
            onClick={() => handleFavorate({ isFavorate, item })}
            className="rounded-full flex h-[41px] w-[41px] text-red-600 items-center justify-center bg-red-200 hover:bg-red-300 transition-colors"
          >
            <FaHeart size={25} />
          </button>
        ) : (
          <button
            onClick={() => handleFavorate({ isFavorate, item })}
            className="rounded-full flex h-[41px] w-[41px] bg-slate-400 text-black items-center justify-center hover:bg-red-300 transition-colors"
          >
            <BiHeart size={25} />
          </button>
        )}

        <Button
          title={<IoCartOutline />}
          onclick={() => handleAddToCart(item)}
          classname="rounded-full flex h-[41px] w-[40px] bg-green-800"
        />
      </div>

      <div className="flex flex-col p-3 gap-1">
        <h2 className="truncate">{item?.title}</h2>
        <h2>$ {item?.price}</h2>
        <h2 className="text-slate-500 text-[14px] line-clamp-2">
          {item?.description}
        </h2>
        {item?.rating && (
          <Rating rate={item?.rating.rate} count={item.rating.count} />
        )}
        <div className="flex flex-row justify-between items-center">
          <div className=" flex flex-row gap-2">
            <Button
              title={<CiEdit />}
              onclick={() => setUpdateProduct(item)}
              classname="bg-green-500  hover:bg-green-800  rounded-md"
            />
            <Button
              title={<MdDelete />}
              onclick={() => dispatch(deleteProduct(item.id))}
              classname="bg-red-500  hover:bg-red-800 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
