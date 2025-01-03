import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
};

interface ProductState {
  products: ProductType[];
  status: "idle" | "pending" | "fulfilled" | "failed";
}

const initialState: ProductState = {
  products: [],
  status: "idle",
};

export const getProduct = createAsyncThunk<ProductType[]>(
  "product/getProduct",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data as ProductType[];
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getProduct.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default ProductSlice.reducer;
