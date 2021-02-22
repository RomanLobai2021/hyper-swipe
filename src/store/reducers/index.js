import { combineReducers } from "redux";
import cards from "./cards.reducer";

const allReducers = combineReducers({ cards });

const rootReducers = (state, action) => {
  return allReducers(state, action);
};

export default rootReducers;
