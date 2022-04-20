
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
store.subscribe(() => {
    console.log("current state", store.getState());
});
export default store;
