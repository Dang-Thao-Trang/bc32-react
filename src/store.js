import { createStore, combineReducers } from "redux";
// import { datveReducer } from "./reducer/datveReducer";
import { datveReducer } from "./reducer/datveReducer";

const reducer = combineReducers({
  datveReducer: datveReducer,
});

const store = createStore(
  reducer /* preloadedState, */,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
