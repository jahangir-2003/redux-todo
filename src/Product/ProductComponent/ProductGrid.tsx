import React, { useState } from "react";
import {
  addToCart,
  addToFavorate,
  ProductType,
  removeFromFavorate,
  updateProducts,
} from "../../Redux/Slices/ProductSlice.tsx";
import ProductCart from "./ProductCart.tsx";
import { AppDispatch } from "../../Redux/Store.tsx";
import { useDispatch } from "react-redux";
import UpdateProduct from "./UpdateProduct.tsx";

export const ProductGrid = ({
  productData,
  favorate,
}: {
  productData: ProductType[];
  favorate: ProductType[];
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [update, setUpdate] = useState<ProductType | null>(null);
  const handleUpdate = () => {
    dispatch(updateProducts(update));
    setUpdate(null);
  };

  const handleFavorate = ({ isFavorate, item }) => {
    if (isFavorate) {
      dispatch(removeFromFavorate(item));
    } else dispatch(addToFavorate(item));
  };

  const handleAddToCart = (item: ProductType) => {
    const newItem = { ...item, quantity: 1 };
    dispatch(addToCart(newItem));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5">
        {productData.map((item) => (
          <div key={item.id} className="mx-auto">
            <ProductCart
              item={item}
              setUpdateProduct={setUpdate}
              isFavorate={favorate.some((favItem) => favItem.id === item.id)}
              handleFavorate={handleFavorate}
              handleAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
      <UpdateProduct
        updateProduct={update}
        setUpdateProduct={setUpdate}
        handleUpdate={handleUpdate}
      />
    </>
  );
};
