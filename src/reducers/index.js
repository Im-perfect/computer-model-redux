import { combineReducers } from "redux";
import computers from "./computers";
import addedComputers from "./addedComputers";

export default combineReducers({
  computers,
  addedComputers
});
