import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
});

const middleware = [thunk];
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
