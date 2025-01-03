import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import {
  addTodo,
  deleteTodo,
  TodoType,
  updateTodo,
} from "../Redux/Slices/TodoSlice.tsx";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todo);
  const [open, setOpen] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<TodoType>({
    title: "",
    price: 0,
    id: 0,
  });

  const [update, setUpdate] = useState<TodoType>({
    title: "",
    price: 0,
    id: 0,
  });

  const handleAdd = () => {
    dispatch(addTodo(newProduct));
    setNewProduct({ title: "", price: 0, id: 0 });
    setOpen(!open);
  };

  const handleUpdate = () => {
    dispatch(updateTodo(update));
    setUpdate({ id: 0, title: "", price: 0 });
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex flex-col items-center w-[500px] mx-auto pt-20">
      {/* this is table section */}

      <table className="table-auto w-[500px] border-2 rounded-md shadow-sm">
        <thead>
          <tr className="bg-slate-300">
            <th className="px-4 py-2 border-b">Product</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <Fragment key={item.id}>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-r">{item.title}</td>
                <td className="px-4 py-2 border-b border-r">{item.price}</td>
                <td className="px-4 py-2 border-b flex flex-row items-center justify-center">
                  <button
                    onClick={() => setUpdate(item)}
                    className="text-blue-500 text-[25px]"
                  >
                    <CiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 text-[25px] ml-2"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-800 w-full text-white p-2 rounded-md my-5"
      >
        Add
      </button>

      {/* this is add modal section */}

      <div
        className={`${
          open ? "flex items-center justify-center" : "hidden"
        } absolute h-full w-full todos top-0 right-0 rounded-lg`}
      >
        <div className="w-[350px] bg-slate-100 flex flex-col p-5 justify-center gap-6 rounded-lg">
          <h2 className="font-bold">Add to Product</h2>
          <div className="flex flex-col items-center w-full shadow-md gap-3 shadow-red-100 p-3 rounded-md m-2">
            <input
              placeholder="Enter product name"
              className="bg-transparent w-full outline-none border-2 p-2 rounded-lg border-blue-800"
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Enter product price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: parseFloat(e.target.value) || 0,
                })
              }
              className="bg-transparent w-full outline-none border-2 p-2 rounded-lg border-blue-800"
            />
            <div className="w-full flex flex-row justify-between text-blue-800 font-normal">
              <button className="h-10" onClick={() => setOpen(!open)}>
                Cancel
              </button>
              <button className="h-10" onClick={handleAdd}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* this is update modal section */}

      <div
        className={`${
          update.id ? "flex items-center justify-center" : "hidden"
        } absolute h-full w-full todos top-0 right-0 rounded-lg`}
      >
        <div className="w-[350px] bg-slate-100 flex flex-col p-5 justify-center gap-6 rounded-lg">
          <h2 className="font-bold">update Product</h2>
          <div className="flex flex-col items-center w-full shadow-md gap-3 shadow-red-100 p-3 rounded-md m-2">
            <input
              placeholder="Enter product name"
              className="bg-transparent w-full outline-none border-2 p-2 rounded-lg border-blue-800"
              value={update.title}
              onChange={(e) => setUpdate({ ...update, title: e.target.value })}
            />
            <input
              type="number"
              placeholder="Enter product price"
              value={update.price}
              onChange={(e) => setUpdate({ ...update, price: e.target.value })}
              className="bg-transparent w-full outline-none border-2 p-2 rounded-lg border-blue-800"
            />
            <div className="w-full flex flex-row justify-between text-blue-800 font-normal">
              <button className="h-10" onClick={() => setUpdate({ id: 0 })}>
                Cancel
              </button>
              <button className="h-10" onClick={handleUpdate}>
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
