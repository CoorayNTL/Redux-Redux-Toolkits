const redux = require("redux");
const createStore = redux.createStore;

const cakeoder = "CAKE_ORDER";
const restorentoder = "RESTORENT_ORDER";

function cakeOrder() {
    return {
        type: cakeoder,
        quantity: 1,
        info: "Cake Order",
    };
}

function restorentOrder(qty = 1) {
    return {
        type: restorentoder,
        quantity: qty,
        info: "Restorent Order",
    };
}

const initialState = {
    cake: 10,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case cakeoder:
            return {
                ...state,
                cake: state.cake - action.quantity,
            };
        case restorentoder:
            return {
                ...state,
                cake: state.cake + action.quantity,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
    console.log("Updated State", store.getState())
);
store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(restorentOrder(5));
