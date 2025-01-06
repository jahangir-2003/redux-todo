import React from "react";
import { ProductGrid } from "./ProductComponent/ProductGrid.tsx";

import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";

const WishList = () => {
  const { favorate } = useSelector((state: RootState) => state.product);
  return (
    <div className="pt-24">
      <ProductGrid productData={favorate} favorate={favorate} />
    </div>
  );
};

export default WishList;
