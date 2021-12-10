import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3001/pizzas');

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
        pizza: [ {
            "id": '',
            "imageUrl": "",
            "name": "",
            "types": [],
            "sizes": [],
            "price": Number(),
            "category": '',
            "rating": ''
        } ],
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
            state.status = 'Loading...'
            state.error = null
        },
        [fetchPizza.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
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


