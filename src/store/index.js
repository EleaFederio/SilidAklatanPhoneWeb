import AllReducers from "./reducers/AllReducers";

const {createStore} = require("redux");

//*************************************************//

const initialStates = {
    auth: {
        loggedIn: false,
        student: {}
    }
}

const store = createStore(
    AllReducers,
    initialStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;