import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nuOflaps: 20,
};

const lapSlices = createSlice({
    name: "msi",
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

export default lapSlices.reducer;
export const msiActions = lapSlices.actions;

// lapActions is an object with two properties: ordered and restocked
// reduce boilerplate code by using createSlice() from @reduxjs/toolkit
//reduce th aditional libraries by using createSlice() from @reduxjs/toolkit
