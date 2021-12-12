import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalPrice: 0,
        totalCount: 0,
    },
    reducers: {
        setTotalPrice(state, action) {
            state.totalPrice += action.payload
        },
        setTotalCount(state, action) {
            state.totalCount += action.payload
        },
        addPizzaCart(state, action) {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [ action.payload ]
                    : [ ...state.items[action.payload.id], action.payload ]
            }
            state.items = newItems
            const arrayPizza = Object.values(newItems).flat()
            state.totalCount = arrayPizza.length
            state.totalPrice = arrayPizza.reduce((accum, item) => accum + item.price, 0)
        },
    }
})

export const { addPizzaCart } = cartSlice.actions
export default cartSlice.reducer