import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from './pizza'
import filterSlice from './filter'

export const store = configureStore({
    reducer: {
        filters: filterSlice,
        pizza: pizzaSlice
    }
})