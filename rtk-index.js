const store = require("./app/store.js");
const msiActions = require("./features/msi/rtk-msiSlice.js").msiActions;

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("updated state:", store.getState());
});

store.dispatch(msiActions.ordered());
store.dispatch(msiActions.ordered());
store.dispatch(msiActions.ordered());
store.dispatch(msiActions.restoked(5));

unsubscribe();
