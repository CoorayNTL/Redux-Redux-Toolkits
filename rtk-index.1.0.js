const store = require("./app/store.js");
const { fetchUsers } = require("./user/userSlice.js");

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("updated state:", store.getState());
});

store.dispatch(fetchUsers());
