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
    initialStates
);

export default store;