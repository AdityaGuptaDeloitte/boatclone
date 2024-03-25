import { combineReducers, compose } from 'redux';
import cartReducer from './CartReducer';
import {configureStore} from "@reduxjs/toolkit"



export const rootReducer = combineReducers({
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({reducer: rootReducer, devTools: composeEnhancers()});

export default store;