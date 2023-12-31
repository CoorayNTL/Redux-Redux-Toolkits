import { configureStore } from "@reduxjs/toolkit";
import msiReducer from "../features/msi/rtk-msiSlice.js";
import appleReducer from "../features/apple/appleSlice.js";
import userReducer from "../user/userSlice.js";
// const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();
const store = configureStore({
    reducer: {
        msi: msiReducer,
        apple: appleReducer,
        user: userReducer,
    },

    // middleware: (getDefaultMuiddleware) =>
    //     getDefaultMuiddleware().concat(logger),
});

export default store;
/* 
    handling multiple reducers with combineReducer is a lot of boilerplate code
    but here we can do that in one line of code 
    by using configureStore() from @reduxjs/toolkit
    the configureStore() function accepts an object with a reducer property
    the reducer property is an object with key value pairs
    the key is the name of the reducer

    ---------------------Aditional Note---------------------------------------------
    the value is the reducer function
    the configureStore() function returns a store object
    the store object has a dispatch() method
    the dispatch() method accepts an action object
    the action object has a type property
    the type property is a string
    the type property is the name of the action
    the dispatch() method returns the updated state
    the store object has a getState() method
    the getState() method returns the current state
    the store object has a subscribe() method
    the subscribe() method accepts a callback function
    the callback function is called whenever the state is updated
    the subscribe() method returns an unsubscribe function
    the unsubscribe function can be used to unsubscribe from the store
    the store object has a replaceReducer() method

*/
