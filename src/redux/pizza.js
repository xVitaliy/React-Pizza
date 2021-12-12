import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
    async ({ category, sortBy, index }, { rejectWithValue }) => {
        try {

            const url = `http://localhost:3001/pizzas?${
                category !== 0 ? `category=${ category - 1 }` : ''
            }&_sort=${ sortBy }&_order=asc`

            const response = await axios.get(url);

            if (response.status !== 200) {
                throw new Error('Sorry, server error')
            }
            return await response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        pizza: [],
        status: null,
        error: null
    },
    reducers: {
        // setPizzas(state, action) {
        //     state.pizza = action.payload
        // }
    },
    extraReducers: {
        [fetchPizza.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchPizza.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.pizza = action.payload
        },
        [fetchPizza.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export const { setPizzas } = pizzaSlice.actions
export default pizzaSlice.reducer


