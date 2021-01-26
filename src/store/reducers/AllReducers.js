import AuthReducer from "./AuthReducer";
import {combineReducers} from "redux";

const  AllReducers = combineReducers({auth: AuthReducer});

export default AllReducers;