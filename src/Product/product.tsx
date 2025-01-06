import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store";
import { addProduct, getProduct } from "../Redux/Slices/ProductSlice.tsx";
import { ProductGrid } from "./ProductComponent/ProductGrid.tsx";
import { BiPlus } from "react-icons/bi";
import AddProduct from "./ProductComponent/AddProduct.tsx";

const Product: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const { products, favorate, status } = useSelector(
    (state: RootState) => state.product
  );
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (status === "pending")
    return (
      <div className="loading h-screen w-full flex items-center justify-center flex-row gap-4 ">
        <span className="loader"></span>
        <span>loading...!</span>
      </div>
    );

  if (status === "failed")
    return (
      <div className="loading h-screen w-full flex items-center justify-center flex-row ">
        <span className="loader"></span>
        <span>Error loading products!</span>
      </div>
    );

  return (
    <div className="relative pt-24">
      <h2 className="flex w-full items-center justify-center text-2xl font-bold uppercase my-4">
        Products
      </h2>
      <div>
        <ProductGrid productData={products} favorate={favorate} />
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bg-red-500 hover:bg-blue-900 duration-500 transition-all  flex w-14 h-14 right-20 bottom-20 items-center justify-center shadow-xl rounded-full"
      >
        <BiPlus size={35} color="white" />
      </button>
      <AddProduct
        open={open}
        setOpen={setOpen}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        handleAdd={handleAddProduct}
      />
    </div>
  );
};

export default Product;
