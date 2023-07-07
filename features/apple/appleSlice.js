const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    nuOfApples: 10,
};


const appleSlice = createSlice({
    name: "apple",
    initialState,
    reducers : {
        ordered: (state) => {
            state.nuOfApples = state.nuOfApples - 1;
        },
        restocked: (state, action) => {
            state.nuOfApples += action.payload; 
        }   
    }
});

module.exports = appleSlice.reducer;
module.exports.appleActions = appleSlice.actions;