import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/slice";
import productsReducer from "../reducers/ProductsSlice";

export const store = configureStore({   

    reducer: {
        cart: cartReducer,
        products: productsReducer,
    },
});

