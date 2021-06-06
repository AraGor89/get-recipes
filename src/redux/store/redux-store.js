// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunkMiddleware from "redux-thunk";
// import authReducer from "../reducers/authReducer";
// import mainReducer from "./../reducers/mainReducer";

// let redusers = combineReducers({
//   authReducer,
//   mainReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// let store = createStore(
//   redusers,
//   composeEnhancers(applyMiddleware(thunkMiddleware))
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../authSlice';

export default configureStore({
  reducer: {
    isAuth: authSlice,
  },
})