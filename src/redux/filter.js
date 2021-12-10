import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        category: 0,
        sortBy: 'popular'
    },
    reducers: {}
})

