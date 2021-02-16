import {combineReducers} from "redux";
import cardListReducer from "./cardListReducer";

const RootReducer = combineReducers({reducers: { 
    CardList: cardListReducer 
}} );

export default RootReducer;