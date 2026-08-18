import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { apiSlice } from "../api/apiSlice";
import authReducer from "../pages/auth/authSlice";
import productReducer from "../pages/collection/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);