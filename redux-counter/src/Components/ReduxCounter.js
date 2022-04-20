
import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from '../Redux/actions';


function ReduxCounter({ count, decrement, increment }) {
  return (
    <div className="Counter">
      <h2>Counter</h2>
      <div>
        <button onClick={() => { decrement(); }}>-</button>
        <span className="count">{count}</span>
        <button onClick={() => { increment(); }}>+</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.count
  };
}
const mapDispatchToProps = {
  increment,
  decrement
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
