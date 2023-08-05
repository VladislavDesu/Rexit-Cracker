import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {CalculatorSlides} from "./calculatorSlice";
import {PackageType} from "./packagesSlice";

export type CartProduct = CalculatorSlides & {
    id: string
    package: PackageType
    price: number
}

type InitialState = {
    products: CartProduct[]
    totalPrice: number
    totalProducts: number
}

const initialState: InitialState = {
    products: [],
    totalPrice: 0,
    totalProducts: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            state.products = [...state.products, action.payload];

            const currentState = current(state);

            const initialValue = 0;
            const totalPrice = currentState.products.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue);

            state.totalProducts = currentState.products.length;
            state.totalPrice = totalPrice;
        },
        deleteProduct: (state, action: PayloadAction<{id: string}>) => {
            const {id} = action.payload;
            state.products = state.products.filter(product => product.id !== id);

            const currentState = current(state);

            const initialValue = 0;
            const totalPrice = currentState.products.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue);

            state.totalProducts = currentState.products.length;
            state.totalPrice = totalPrice;
        }
    },
});

export const {addToCart, deleteProduct} = cartSlice.actions;

export default cartSlice.reducer;