import React from "react";
import Input from "../../Component/Input.tsx";
import { ProductType } from "../../Redux/Slices/ProductSlice.tsx";
import Button from "../../Component/Button.tsx";

interface AddProductProps {
  updateProduct: ProductType | null;
  setUpdateProduct: React.Dispatch<React.SetStateAction<ProductType>>;
  handleUpdate: () => void;
}

const UpdateProduct: React.FC<AddProductProps> = ({
  updateProduct,
  setUpdateProduct,
  handleUpdate,
}) => {
  return (
    <div
      className={`${
        updateProduct ? "fixed" : "hidden"
      } w-full h-full flex todos items-center justify-center top-0`}
    >
      <div className="bg-white w-[90%] p-5 md:w-[500px] h-[60%] flex  justify-center flex-col rounded-md">
        <div className="grid grid-cols-2 gap-3">
          {/* Title Input */}
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUpdateProduct({ ...updateProduct, title: e.target.value })
            }
            value={updateProduct?.title}
            type="text"
            placeholder="Enter product title"
            label="title"
          />

          {/* Description Input */}
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUpdateProduct({
                ...updateProduct,
                description: e.target.value,
              })
            }
            value={updateProduct?.description}
            type="text"
            placeholder="Enter product description"
            label="description"
          />

          {/* Category Input */}
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUpdateProduct({ ...updateProduct, category: e.target.value })
            }
            value={updateProduct?.category}
            type="text"
            placeholder="Enter product category"
            label="category"
          />

          {/* Price Input (fix 'numeric' to 'number' and handle conversion) */}
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUpdateProduct({
                ...updateProduct,
                price: parseFloat(e.target.value) || 0,
              })
            }
            value={updateProduct?.price?.toString()}
            type="number"
            placeholder="Enter product price"
            label="price"
          />
          <Input
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUpdateProduct({
                ...updateProduct,
                image: e.target.value,
              })
            }
            value={updateProduct?.image}
            type="text"
            placeholder="Enter product  image url"
            label="image"
          />
        </div>
        <div className="flex-row flex justify-between items-center my-2">
          <Button title="done" onclick={handleUpdate} />
          <Button title="cancel" onclick={() => setUpdateProduct(null)} />
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
