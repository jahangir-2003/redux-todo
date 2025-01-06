import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Rating = ({ rate, count }: { rate: number; count: number }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index} className="text-yellow-400 text-xl">
        {rate >= index + 1 ? (
          <FaStar />
        ) : rate > number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return (
    <div className="flex flex-row gap-4 items-baseline">
      <span className="flex flex-row gap-2">{ratingStar}</span>
      <span className="text-slate-500 text-[15px]">{count} (Reviews)</span>
    </div>
  );
};

export default Rating;
