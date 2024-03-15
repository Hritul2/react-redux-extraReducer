// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PRODUCT_LIST_REQUEST, (state) => {
        state.loading = true;
        state.products = [];
        state.error = null;
      })
      .addCase(PRODUCT_LIST_SUCCESS, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(PRODUCT_LIST_FAIL, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
