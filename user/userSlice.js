const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk; // handle async requests in redux toolkit using createAsyncThunk
const axios = require("axios");

const initialState = {
    loading: false,
    users: [],
    error: "",
};

const fetchUsers = createAsyncThunk(
    // createAsyncThunk is a function that takes two arguments, the first is the name of the action and the second is a function that returns a promise
    "users/fetchUsers",
    () => {
        return axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.data.map((user) => user.name));
    }
);

const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            // pending for when the request is made
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // fulfilled for when the request is successful
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            // rejected for when the request is failed
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });
    },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
