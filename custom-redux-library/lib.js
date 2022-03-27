var myRedux;
(function (obj) {
    class MyRedux {
        createStore(reducer) {
            let state = reducer.call(this, undefined, { type: '' });
            let listners = [];
            return {
                subscribe(cb) {
                    listners.push(cb);
                    const cbIndex = listners.length - 1;
                    return {
                        unsubscribe() {
                            listners = listners.splice(cbIndex, 1);
                        }
                    }
                },
                dispatch(action) {
                    state = reducer.call(this, state, action);
                    listners.forEach(cb => {
                        cb.apply(this);
                    });
                },
                getState() {
                    return state;
                }
            }
        }

    }
    myRedux = new MyRedux();
})(myRedux);

export default myRedux;
