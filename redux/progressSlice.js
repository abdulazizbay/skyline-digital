import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        items: [],
    },
};

const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        saveFormData: (state, action) => {
            state.data = action.payload; // Save the form data
        },
        removeItem:(state, action) => {
            state.data.items = state.data.items.filter(
                (item) => item !== action.payload
            )
        }
    },
});
export const { saveFormData, removeItem } = progressSlice.actions;
export default progressSlice.reducer;
