import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from './pizza'
import filterSlice from './filter'
import cartReducer from './Cart'

export const store = configureStore({
    reducer: {
        filters: filterSlice,
        pizza: pizzaSlice,
        cart: cartReducer,
    }
})