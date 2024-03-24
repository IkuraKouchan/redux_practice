import { combineReducers } from "redux";
import { isLoginReducer } from "./isLogin";
import { counterReducer } from "./coutner";

export const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});
