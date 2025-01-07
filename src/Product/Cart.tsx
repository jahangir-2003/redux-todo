import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store";
import { PiPlus } from "react-icons/pi";
import { CgRemove } from "react-icons/cg";
import {
  decreaseProduct,
  increaseProduct,
} from "../Redux/Slices/ProductSlice.tsx";

const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.product);

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="pt-20">
      <div className="overflow-hidden rounded-md shadow-sm">
        <table className="table-auto w-full border-2 border-gray-300">
          <thead className="bg-slate-300">
            <tr>
              <th className="w-[10%] border border-slate-500">Image</th>
              <th className="w-[20%] border border-slate-500">Title</th>
              <th className="w-[10%] border border-slate-500">Quantity</th>
              <th className="w-[10%] border border-slate-500">Price</th>
              <th className="w-[10%] border border-slate-500">Total</th>
              <th className="w-[10%] border border-slate-500">Actions</th>
            </tr>
          </thead>
        </table>

        {/* Scrollable Products Container */}
        <div className="max-h-[66vh] overflow-y-auto">
          <table className="table-auto w-full border-2">
            <tbody>
              {cart.length > 0 ? (
                <>
                  {cart.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="w-[10%] py-2 border border-slate-500">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 mx-auto object-cover rounded-md"
                        />
                      </td>
                      <td className="w-[20%] text-center border border-slate-500">
                        {item.title}
                      </td>
                      <td className="w-[10%] text-center  border border-slate-500">
                        {item.quantity}
                      </td>
                      <td className="w-[10%] text-center  border border-slate-500">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="w-[10%] text-center  border border-slate-500">
                        ${(item.quantity * item.price).toFixed(2)}
                      </td>
                      <td className="w-[10%] text-center   border border-slate-500">
                        <div className="flex flex-row gap-5 items-center justify-center mx-auto">
                          <button
                            onClick={() => dispatch(increaseProduct(item.id))}
                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700"
                          >
                            {<PiPlus />}
                          </button>
                          <button
                            onClick={() => dispatch(decreaseProduct(item.id))}
                            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700"
                          >
                            {<CgRemove />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <td colSpan="6" className=" text-center">
                    Your cart is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fixed Bottom Total Price */}
      <div className="bg-slate-300 p-4 mt-4 sticky bottom-0">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">Total:</span>
          <span className="font-semibold text-lg">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <button className="bg-blue-950 w-[100px] h-[40px] text-white font-bold rounded-md mt-2 hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
