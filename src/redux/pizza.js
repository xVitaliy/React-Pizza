import { createSlice } from "@reduxjs/toolkit";

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
        } ]
    },
    reducers: {
        setPizzas(state, action) {
            state.pizza = action.payload
        }
    }
})

export const { setPizzas } = pizzaSlice.actions
export default pizzaSlice.reducer