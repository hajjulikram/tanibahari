import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  count: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCountProduct: (state, action) => {
      state.count = action.payload;
    },
    setNameProduct: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setNameProduct, setCountProduct } = productSlice.actions;

export default productSlice.reducer;
