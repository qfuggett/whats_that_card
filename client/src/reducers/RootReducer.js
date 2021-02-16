import {combineReducers} from "redux";
import cardReducer from "./cardReducer";

const RootReducer = combineReducers({reducers: { cardReducer }} );

export default RootReducer;