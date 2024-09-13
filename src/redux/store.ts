import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

export const reduxStore = configureStore({
    reducer: {
        user: authSlice,
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch;