import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  addToFavorate,
  ProductType,
  removeFromFavorate,
} from "../Redux/Slices/ProductSlice.tsx";
import Button from "../Component/Button.tsx";
import { BiHeart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store.tsx";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message || "Something went wrong");
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="pt-20 h-screen items-center flex flex-col md:flex-row justify-between w-[90%] md:w-[80%] mx-auto">
      <div className="md:w-[40%] flex justify-center">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-[320px] h-[320px] object-contain"
        />
      </div>
      <div className="md:w-[50%] flex flex-col gap-3">
        <h2>
          <span className="font-bold text-[18px]">Title:-</span>{" "}
          <span className="text-[17px]">{product?.title}</span>
        </h2>
        <h2>
          <span className="font-bold text-[18px]">Category:- </span>{" "}
          <span className="text-[17px]">{product?.category}</span>
        </h2>
        <h2>
          <span className="font-bold text-[18px]">Price:- </span>{" "}
          <span className="text-[17px]">$ {product?.price}</span>
        </h2>
        <h2>
          <span className="font-bold text-[18px]">Description:- </span>{" "}
          <span className="text-[17px] text-slate-600">
            {product?.description}
          </span>
        </h2>
        <div className="flex flex-row gap-5">
          <button
            onClick={() => {}}
            className="w-[41px] h-[41px] flex items-center justify-center bg-purple-500 hover:bg-purple-800 rounded-md "
          >
            <IoCartOutline size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
