import { combineReducers } from "redux";
import { allAuthsReducer } from "./authReducers";
const reducers = combineReducers({
    allAuths : allAuthsReducer
})
export default reducers