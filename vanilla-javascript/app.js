(function () {
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

    const store = Redux.createStore(counterReducer);

    const counterElm = document.getElementById("counter");

    function reneder() {
        const state = store.getState();
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
})()
