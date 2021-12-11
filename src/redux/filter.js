import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        category: 0,
        sortBy: 'popular',
        index: 0
    },
    reducers: {
        toggleCategory(state, action) {
            state.category = action.payload.index
        },
        toggleSort(state, action) {
            state.index = action.payload.index
            state.sortBy = action.payload.sort.type
        }
    }
})

export const { toggleCategory, toggleSort } = filterSlice.actions
export default filterSlice.reducer