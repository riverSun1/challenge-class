import { combineReducers, createStore } from "redux";
import memos from "../modules/memos.reducer";

// reducer (공장)
const rootReducer = combineReducers({
  memos: memos,
});

// store (저장소)
const store = createStore(rootReducer);
export default store;
