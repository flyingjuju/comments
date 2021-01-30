import { combineReducers } from "@reduxjs/toolkit";

import viewReducer, { name as viewName } from "store/slices/view";
import commentReducer from "./comment";
import commentorReducer from "./commentors";

//add comment reducer
const rootReducer = combineReducers({
  [viewName]: viewReducer,
  comments: commentReducer,
  commentors: commentorReducer,
});

export default rootReducer;
