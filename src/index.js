import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// importing redux stuff
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// importing our reducer
import productsReducers from "./reducers/products_reducers";
import userReducer from "./reducers/user_reducers";

const allReducers = combineReducers({
  products: productsReducers,
  user: userReducer
});

// ALL CODE INHAANCESERS
const storeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // defining our store
const store = createStore(
  allReducers,
  {
    products: [{ name: "iphone", id: "1" }, { name: "iphone", id: "1" }],
    user: "Ibrahim adbulbasit"
  },
  storeEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
