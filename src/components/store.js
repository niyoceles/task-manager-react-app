import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers';

const initialiState = {};
const middleware = [];

const store = createStore(
  rootReducer,
  initialiState,
  applyMiddleware(...middleware));

export default store;