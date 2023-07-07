const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    nuOflaps: 10,
};

const lapSlices = createSlice({
    name: "lap",
    initialState,
    reducers: {
        ordered: (state) => {
            state.nuOflaps = state.nuOflaps - 1;
        },
        restoked: (state, action) => {
            state.nuOflaps += action.payload; // action.playload is the number of laps to restock automatically when the user clicks the restock button
        },
    },
});

module.exports = lapSlices.reducer;
module.exports.msiActions = lapSlices.actions;

// lapActions is an object with two properties: ordered and restocked
// reduce boilerplate code by using createSlice() from @reduxjs/toolkit
//reduce th aditional libraries by using createSlice() from @reduxjs/toolkit
