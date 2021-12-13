import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalPrice: 0,
        totalCount: 0,
    },
    reducers: {
        clearCart(state, action) {
            state.items = {}
            state.totalPrice = 0
            state.totalCount = 0
        },

        removeCart(state, action) {
            const { id, items, price } = action.payload
            const sum = items * price
            state.totalPrice -= sum
            state.totalCount -= items
            delete state.items[id]
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

        onMinusItem(state, action) {
            const index = action.payload.id
            if (state.items[index].length === 1) {
                return
            }
            state.items[index].pop()
            state.totalCount -= 1
            state.totalPrice -= action.payload.price
        }
    }
})

export const { addPizzaCart, clearCart, removeCart, onMinusItem, onPlusItem } = cartSlice.actions
export default cartSlice.reducer