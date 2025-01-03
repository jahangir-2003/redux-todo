import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Counter from "./Counter.tsx";
import Todos from "./Todo/Todos.tsx";
import Product from "./Product/product.tsx";
const App = () => {
  return (
    <>
      <nav className="flex flex-row fixed z-50 bg-blue-500 w-full h-16 items-center justify-center text-2xl capitalize gap-4 underline ">
        <Link to="/">counter</Link>
        <Link to="todos">todos</Link>
        <Link to="product">product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
