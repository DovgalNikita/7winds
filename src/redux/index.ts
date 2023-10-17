import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./dataApi";

const initialReducer = {
    [dataApi.reducerPath]:dataApi.reducer
};

export const store = configureStore({
    reducer:initialReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(dataApi.middleware)
});

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;