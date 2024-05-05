import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
  inputValue,
} from "./features/counter/counterSlice";
function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const inpVal = useAppSelector(inputValue);

  return (
    <div className="App">
      <div className="counter">{count}</div>
      <div className="input">
        <input
          type="text"
          value={inpVal}
          onChange={(e) =>
            dispatch(incrementByAmount(parseInt(e.target.value)))
          }
        />
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment(inputValue))}>+</button>
      </div>
    </div>
  );
}

export default App;
