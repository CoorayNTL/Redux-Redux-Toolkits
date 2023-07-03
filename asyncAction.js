const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading: false,
    user: [],
    error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fectUsersReqest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
};

const fectUsersSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users,
    };
};

const fectUsersFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error,
    };
};

const reducer = (state = initialState, action) => {
    // reducer function
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: "",
            };
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fectUsersReqest());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                // response.data is the users
                const users = response.data.map((user) => user.id);
                const users2 = response.data.map((user) => user.name);

                dispatch(fectUsersSuccess(users));
                dispatch(fectUsersSuccess(users2));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(fectUsersFailure(error.message));
            });
    };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware)); // thunkMiddleware is used to handle async action

store.subscribe(() => {
    console.log(store.getState()); // get the state
});

store.dispatch(fetchUsers()); // dispatch the action to the reducer function to update the state
