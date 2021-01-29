import { combineReducers } from "@reduxjs/toolkit";

import viewReducer, { name as viewName } from "store/slices/view";
import commentReducer from "./comment";

const rootReducer = combineReducers({
  [viewName]: viewReducer,
  comment: commentReducer,
});

export default rootReducer;
