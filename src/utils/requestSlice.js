import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: 'request',
    initialState: null,
    reducers: {
        addRequests: (state, action) => action.payload,
        removeRequest: (state, action) => {
            const newArray = state.filter(r => r._id !== action.payload);
            return newArray;
        },
        resetRequests: () => null,
    },
});

export const { addRequests, removeRequest, resetRequests } = requestSlice.actions;

export default requestSlice.reducer;