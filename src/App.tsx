import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Counter from "./Counter.tsx";
import Todos from "./Todo/Todos.tsx";
import Product from "./Product/product.tsx";
import SingleProduct from "./Product/SingleProduct.tsx";
import Cart from "./Product/Cart.tsx";
import WishList from "./Product/WishList.tsx";
import { BiHeart } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/Store";
const App = () => {
  const { favorate, cart } = useSelector((state: RootState) => state.product);
  return (
    <>
      <nav className="flex flex-row fixed z-50 bg-blue-500 w-full h-16 items-center justify-center text-2xl capitalize gap-4 text-white font-mono">
        <div className="flex flex-row gap-2">
          <Link to="/">counter</Link>
          <Link to="todos">todos</Link>
          <Link to="product">product</Link>
        </div>
        <div className="flex flex-row gap-5">
          <Link to="wishlist" className="relative">
            <BiHeart />
            {favorate.length > 0 && (
              <span className="absolute -top-4 -right-4 bg-red-500 w-6 h-6 text-[16px] rounded-full flex items-center justify-center">
                {favorate.length}
              </span>
            )}
          </Link>
          <Link to="cart" className="relative">
            <IoCartOutline />
            {cart.length > 0 && (
              <span className="absolute -top-4 -right-4 bg-red-500 w-6 h-6 text-[16px] rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </>
  );
};

export default App;
