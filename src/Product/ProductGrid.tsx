import React from "react";
import { ProductType } from "../Redux/Slices/ProductSlice";
import ProductCart from "./ProductCart.tsx";

export const ProductGrid = ({
  productData,
}: {
  productData: ProductType[];
}) => {
  //   console.log(productData);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-5">
      {productData.map((item) => (
        <div key={item.id} className="mx-auto">
          <ProductCart item={item} />
        </div>
      ))}
    </div>
  );
};
