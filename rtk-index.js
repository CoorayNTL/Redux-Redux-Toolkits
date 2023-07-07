const store = require("./app/store.js");
const msiActions = require("./features/msi/rtk-msiSlice.js").msiActions;
const appleActions = require("./features/apple/appleSlice.js").appleActions;

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("updated state:", store.getState());
});

store.dispatch(msiActions.ordered());
store.dispatch(msiActions.ordered());
store.dispatch(msiActions.ordered());
store.dispatch(msiActions.restoked(5));

store.dispatch(appleActions.ordered());
store.dispatch(appleActions.ordered());
store.dispatch(appleActions.ordered());
store.dispatch(appleActions.restocked(5));

unsubscribe();
