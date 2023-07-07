const configureStore = require("@reduxjs/toolkit").configureStore
const msiReducer = require("../features/msi/rtk-msiSlice.js")

const store = configureStore({
    reducer: {
        msi: msiReducer,
    },
});

module.exports = store;
