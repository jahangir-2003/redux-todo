import React from "react";
import Input from "../../Component/Input.tsx";
import { ProductType } from "../../Redux/Slices/ProductSlice.tsx";
import Button from "../../Component/Button.tsx";

interface AddProductProps {
  newProduct: ProductType;
  setNewProduct: React.Dispatch<React.SetStateAction<ProductType>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAdd: () => void;
}

const AddProduct: React.FC<AddProductProps> = ({
  newProduct,
  setNewProduct,
  open,
  setOpen,
  handleAdd,
}) => {
  return (
    <div
      className={`${
        open ? "fixed" : "hidden"
      } w-full h-full flex todos items-center justify-center top-0`}
    >
      <div className="bg-white w-[90%] p-5 md:w-[500px] h-[60%] flex  justify-center flex-col rounded-md">
        <div className="grid grid-cols-2 gap-3">
          {/* Title Input */}
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
            value={newProduct.title}
            type="text"
            placeholder="Enter product title"
            label="title"
          />

          {/* Description Input */}
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            type="text"
            placeholder="Enter product description"
            label="description"
          />

          {/* Category Input */}
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            value={newProduct.category}
            type="text"
            placeholder="Enter product category"
            label="category"
          />

          {/* Price Input (fix 'numeric' to 'number' and handle conversion) */}
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewProduct({
                ...newProduct,
                price: parseFloat(e.target.value) || 0,
              })
            }
            value={newProduct.price.toString()}
            type="number"
            placeholder="Enter product price"
            label="price"
          />
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewProduct({
                ...newProduct,
                image: e.target.value,
              })
            }
            value={newProduct.image}
            type="text"
            placeholder="Enter product  image url"
            label="image"
          />
        </div>
        <div className="flex-row flex justify-between items-center my-6">
          <Button
            title="done"
            onclick={handleAdd}
            classname="md:w-[110px] md:h-[45px] flex items-center justify-center  rounded-md"
          />
          <Button
            title="cancel"
            onclick={() => setOpen(!open)}
            classname="md:w-[110px] md:h-[45px] flex items-center justify-center  rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
