import {combineReducers} from "redux";
import programs from "./programReducer";

const rootReducer = combineReducers({
  programs
});

export default rootReducer;