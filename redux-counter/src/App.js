import './App.css';
import ReduxCounter from './Components/ReduxCounter';
import { connect } from "react-redux";

function App({ count }) {
  return (
    <div className="App">
      <ReduxCounter />
      <h2>Use Redux state from App</h2>
      {count}
    </div>
  );
}


const mapStateToProps = (state) => ({ count: state.count });

export default connect(mapStateToProps)(App);
