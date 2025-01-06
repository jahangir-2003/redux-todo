import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity: number;
};

interface ProductState {
  products: ProductType[];
  cart: ProductType[];
  favorate: ProductType[];
  status: "idle" | "pending" | "fulfilled" | "failed";
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  cart: [],
  favorate: [],
  status: "idle",
  error: null,
};

export const getProduct = createAsyncThunk<ProductType[]>(
  "product/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data as ProductType[];
    } catch (error) {
      // console.log(error.message);
      return rejectWithValue(error?.message || "Something went wrong");
    }
  }
);

export const addProduct = createAsyncThunk<ProductType, ProductType>(
  "product/addProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const deleteProduct = createAsyncThunk<ProductType, number>(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.message || "Something went wrong");
    }
  }
);

export const updateProducts = createAsyncThunk<ProductType, ProductType>(
  "product/updateProducts",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${data.id}`,
        data
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.message || "Something went wrong");
    }
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToFavorate: (state, action) => {
      state.favorate = [...state.favorate, action.payload];
    },
    removeFromFavorate: (state, action) => {
      state.favorate = state.favorate.filter(
        (item) => item.id !== action.payload.id
      );
    },

    addToCart: (state, action) => {
      // Add product to cart
      const productExists = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!productExists) {
        state.cart = [action.payload, ...state.cart];
      } else {
        productExists.quantity += 1;
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseProduct: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseProduct: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else
        state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(addProduct.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products = [action.payload, ...state.products];
        state.status = "fulfilled";
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        state.status = "fulfilled";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(updateProducts.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
        state.status = "fulfilled";
      })
      .addCase(updateProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const {
  addToFavorate,
  removeFromFavorate,
  addToCart,
  removeFromCart,
  increaseProduct,
  decreaseProduct,
} = ProductSlice.actions;
export default ProductSlice.reducer;
