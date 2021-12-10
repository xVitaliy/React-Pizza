import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from './pizza'

export const store = configureStore({
    reducer: {
        pizza: pizzaSlice
    }
})