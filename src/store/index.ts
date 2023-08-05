import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "slices/calculatorSlice";
import packagesReducer from "slices/packagesSlice";
import cartReducer from "slices/cartSlice";

export const index = configureStore({
    reducer: {
        calculator: calculatorReducer,
        packages: packagesReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;