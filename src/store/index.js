import { createStore, combineReducers } from "redux";
import homeReducer from "./homeReducer";
import homeDetailReducer from "./homeDetailReducer";
import userReducer from "./userReducer";

export default createStore(
  combineReducers({ home: homeReducer, topic: homeDetailReducer, user: userReducer }),
);
