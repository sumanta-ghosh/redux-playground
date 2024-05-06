import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialCartStateInterface {
  cartItems: Array<EcomItem>;
}

const initialCartState: initialCartStateInterface = {
  cartItems: [],
};
const createCartSlice = createSlice({
  name: "cartSlice",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<EcomItem>) => {
      state.cartItems.push(action.payload);
    },
  },
});

export default createCartSlice.reducer;
export const { addToCart } = createCartSlice.actions;
