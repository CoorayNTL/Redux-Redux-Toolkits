const redux = require("redux");
const producer = require("immer"); //npm install immer perpose of immutable state management

const initialState = {
    name: "Rahul",
    age: 25,
    address: {
        city: "Bangalore",
        state: "Karnataka",
        country: "New Zealand",
    },
};

//step 1 : define action creater
const Street_update = "STREET_UPDATE";

//set 2 : define action object
const updatestreet = (street) => {
    return {
        type: Street_update, //pass action type
        payload: street, //pass data
    };
};

//step 3 : define reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Street_update:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload, //pass data
            //     },
            // };
            return producer (state,draft => {
               draft.address,street = action.payload; //playload data pass to street 
            })
    
        default: {
            return state;
        }
    }
};

//step 4 : create store
const store = redux.createStore(reducer);

//step 5 : subscribe
store.subscribe(() => {
    console.log(store.getState());
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//step 6 : dispatch
store.dispatch(updatestreet("BTM 2nd Stage"));

//step 7 : dispatch
store.dispatch(updatestreet("BTM 3rd Stage"));

//step 8 : dispatch
store.dispatch(updatestreet("BTM 4th Stage"));

unsubscribe();
