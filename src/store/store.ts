import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sendEmailReducer from "./sendEmail";

const rootReducer = combineReducers({
    email: sendEmailReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 