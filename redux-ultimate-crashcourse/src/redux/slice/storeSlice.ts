import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";

interface initialStateInterface {
  products: Array<EcomItem>;
  loading: boolean;
  error?: string;
}

const initialState: initialStateInterface = {
  products: [],
  loading: false,
  error: "",
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<EcomItem[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreItemsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchStoreItemsThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchStoreItemsThunk.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export const fetchStoreItemsThunk = createAsyncThunk<Array<EcomItem>, void>(
  "fetch/storeItem",
  async (body, thunkApi) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products85");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export default storeSlice.reducer;
export const { updateProducts } = storeSlice.actions;
