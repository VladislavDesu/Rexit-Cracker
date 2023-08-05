import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {CalculatorSlideTypes} from "../components/Constructor/CalculatorSlide";
import {PackageType} from "./packagesSlice";

export type CalculatorSlides = { slides: Record<CalculatorSlideTypes, number> }

type InitialState = CalculatorSlides & {
    max: number
    disabled: CalculatorSlideTypes
    package: PackageType | null
    currentPrice: number
}

const initialState: InitialState = {
    slides: {
        soybean: 0,
        sesame: 0,
        wheat: 0,
        corn: 100,
    },

    currentPrice: 0,
    package: null,
    disabled: "corn",
    max: 100,
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        calculate: (state, action: PayloadAction<{ type: CalculatorSlideTypes, value: number }>) => {
            const {type, value} = action.payload;

            let sum = value;
            const currentState = current(state);

            for (const key in currentState.slides) {
                if (key !== state.disabled && key !== type) {
                    sum += currentState.slides[key as CalculatorSlideTypes];
                }
            }

            if (sum <= state.max) {
                state.slides[type] = value;
                state.slides[state.disabled] = state.max - sum;
            }
        },
        setPackage: (state, action: PayloadAction<PackageType>) => {
            state.package = action.payload;

            state.currentPrice = action.payload.price;
        },
        reset: (state) => {
            state.slides = initialState.slides;
            state.package = initialState.package;
            state.currentPrice = initialState.currentPrice;
        }
    },
});

export const {calculate, setPackage, reset} = calculatorSlice.actions;

export default calculatorSlice.reducer;