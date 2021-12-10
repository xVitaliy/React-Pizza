import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        category: 0,
        sortBy: 'popular'
    },
    reducers: {
        toggleCategory(state, action) {
            state.category = action.payload.index
        }
    }
})

export const { toggleCategory } = filterSlice.actions
export default filterSlice.reducer