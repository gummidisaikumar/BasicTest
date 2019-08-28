import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import allReducer from "./Reducer/combineReducer";

const REDUX_DEVTOOL =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const InitialState = {
  person: { name: "", isLogin: false },
  users: [],
};

const middleware = [thunk];
const store = createStore(allReducer, InitialState, compose(applyMiddleware(...middleware), REDUX_DEVTOOL));

export default store;
