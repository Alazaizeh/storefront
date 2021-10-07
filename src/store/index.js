import { combineReducers, createStore } from "redux";
import cart from "./cart";
import categories from "./categories";

// This dependecyenables the Redux Dev Tools in your chrome console.
import { composeWithDevTools } from "redux-devtools-extension";

// Combine reducers isn't really necessary when you only have one reducer.
// But it's good to have it in case you have multiple reducers.
// And 99.99% of all Redux apps will have more than one reducer.
let reducers = combineReducers({ cart, categories });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
