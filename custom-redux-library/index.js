
import myRedux from './my-redux.js'

/*
function reducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + 1 };
        case 'DECREMENT':
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}
const store = myRedux.createStore(reducer);

store.subscribe(() => console.log('value updated', store.getState()));

store.dispatch({ type: 'INCREMENT' }); //value updated {value: 1}
store.dispatch({ type: 'INCREMENT' }); //value updated {value: 2}
store.dispatch({ type: 'INCREMENT' }); //value updated {value: 3}
store.dispatch({ type: 'INCREMENT' }); //value updated {value: 4}

store.dispatch({ type: 'DENCREMENT' }); //value updated {value: 3}
store.dispatch({ type: 'DENCREMENT' }); //value updated {value: 2}
store.dispatch({ type: 'DENCREMENT' }); //value updated {value: 1}
*/

const initialState = {
    value: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "counter/increment":
            return { ...state, value: state.value + 1 };

        case "counter/decrement":
            let newValue = state.value;
            if (state.value > 0) {
                newValue--;
            }
            return { ...state, value: newValue };

        default:
            return state;
    }
}

const store = myRedux.createStore(counterReducer, initialState);

const counterElm = document.getElementById("counter");

function reneder() {
    const state = store.getState();
    console.log(state);
    counterElm.innerHTML = state.value.toString();
}
reneder();
//whenever there is anychanges re-render the display
store.subscribe(reneder);

const incrBtnElm = document.getElementById("btn-incr");
const decrBtnElm = document.getElementById("btn-decr");

incrBtnElm.addEventListener("click", (e) => {
    e.preventDefault();
    store.dispatch({ type: "counter/increment" });
});

decrBtnElm.addEventListener("click", (e) => {
    e.preventDefault();
    store.dispatch({ type: "counter/decrement" })
})