import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: '#000',
    fontSize: 10,
};

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        change: (state, action) => {
            state.color = state.color === '#000' ? 'red' : 'yellow';
        },
        changeFontSize: (state, action) => {
            state.fontSize = state.fontSize + 2;
        },
    },
});

export const { change, changeFontSize } = colorSlice.actions;

export default colorSlice.reducer;