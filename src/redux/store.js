import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "./reducers/appReducer";
import { syncStorageMiddleware } from "./syncStorageMiddleware";

const middleware = [thunk, syncStorageMiddleware];

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
