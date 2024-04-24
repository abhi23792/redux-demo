import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/Product";

type ProductState = {
    products: Array<Product>;
}

const initialState: ProductState = {
    products: []
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice.reducer;

