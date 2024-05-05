import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

// Define a type for the slice state
interface CounterState {
  counter: number;
  inputValue: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  counter: 0,
  inputValue: 1,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);
      state.counter += state.inputValue;
    },
    decrement: (state) => {
      state.counter -= state.inputValue;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.countReducer.counter;
export const inputValue = (state: RootState) => state.countReducer.inputValue;

const counterReducer = counterSlice.reducer;
export default counterReducer;
