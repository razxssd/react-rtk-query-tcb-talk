import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/dummyData";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware), // Ci aiuterà semplicemente con la gestione della cache
});

setupListeners(store.dispatch); // This is a tool for enabling the refetchOnFocus and refetchOnReconnect characteristics
