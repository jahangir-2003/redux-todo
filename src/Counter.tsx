import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Redux/Store.tsx";
import {
  decrease,
  decreaseByAmount,
  increase,
  increaseByAmount,
} from "./Redux/Slices/CounterSlice.tsx";

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);
  return (
    <div className="w-full flex flex-col items-center justify-center pt-16">
      <div className="flex flex-row gap-3">
        <button
          onClick={() => dispatch(increase())}
          className="bg-blue-500 p-2 text-white font-bold capitalize rounded-md my-2"
        >
          increase
        </button>
        <button
          onClick={() => dispatch(increaseByAmount(5))}
          className="bg-blue-500 p-2 text-white font-bold capitalize rounded-md my-2"
        >
          increase 5
        </button>
      </div>
      <h2 className="text-2xl">count = {value}</h2>
      <div className="flex flex-row gap-3">
        <button
          onClick={() => dispatch(decrease())}
          className="bg-blue-500 p-2 text-white font-bold capitalize rounded-md my-2"
        >
          decrease
        </button>
        <button
          onClick={() => dispatch(decreaseByAmount(3))}
          className="bg-blue-500 p-2 text-white font-bold capitalize rounded-md my-2"
        >
          decrease 3
        </button>
      </div>
    </div>
  );
};

export default Counter;
