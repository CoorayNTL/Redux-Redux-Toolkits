import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nuOfApples: 10,
};

const appleSlice = createSlice({
    name: "apple",
    initialState,
    reducers: {
        ordered: (state) => {
            state.nuOfApples = state.nuOfApples - 1;
        },
        restocked: (state, action) => {
            state.nuOfApples += action.payload;
        },

        extraReducers: (builder) => {
            builder.addCase("msi/ordered", (state) => {
                state.nuOfApples = state.nuOfApples - 1;
            });
            /* why use extraReducer : 
            https://redux-toolkit.js.org/api/createSlice#the-extrareducers-builder-callback-notatio */
        },
    },
});

export default appleSlice.reducer;
export const appleActions = appleSlice.actions;
