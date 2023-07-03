const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const cakeoder = "CAKE_ORDER";
const restorentoder = "RESTORENT_ORDER";

const icecreameoder = "ICE_CREAM";
const restorentoderIceCream = "RESTORENT_ORDER_ICE_CREAM";

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

function iceCream() {
    return {
        type: icecreameoder,
        quantity: 1,
        info: "Ice Cream Order",
    };
}

function restorentOrderIceCream(qty = 1) {
    return {
        type: restorentoderIceCream,
        quantity: qty,
        info: "Restorent Order Ice Cream",
    };
}
const initialState = {
    cake: 10,
    iceCream: 20,
};

const cake_reducer = (state = initialState, action) => {
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

const icecream_reducer = (state = initialState, action) => {
    switch (action.type) {
        case iceCream:
            return {
                ...state,
                iceCream: state.iceCream - action.quantity,
            };
        case restorentoderIceCream:
            return {
                ...state,
                iceCream: state.iceCream + action.quantity,
            };
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    cake: cake_reducer,
    icecream_reducer: icecream_reducer,
});

const store = createStore(rootReducer);

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
    console.log("Updated State", store.getState())
);
store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(restorentOrder(5));

store.dispatch(iceCream());
store.dispatch(iceCream());
store.dispatch(iceCream());
store.dispatch(restorentOrderIceCream(5));

unsubscribe();
