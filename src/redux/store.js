import { configureStore } from "@reduxjs/toolkit";
import { currentCityApi } from "./currentCityAPI";

export const store = configureStore({
  reducer: {
    [currentCityApi.reducerPath]: currentCityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currentCityApi.middleware),
});
