import {createSlice} from "@reduxjs/toolkit";

export type PackageType = {
    value: number
    price: number
    label: string
}

type InitialState = {
    list: PackageType[]
}

const initialState: InitialState = {
    list: [
        {
            value: 0.5,
            price: 20,
            label: "Small Package"
        },
        {
            value: 1,
            price: 40,
            label: "Medium Package"
        },
        {
            value: 1.5,
            price: 60,
            label: "Large Package"
        }
    ]
};

export const packagesSlice = createSlice({
    name: "packages",
    initialState,
    reducers: {},
});

export default packagesSlice.reducer;