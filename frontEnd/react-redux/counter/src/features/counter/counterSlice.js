import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        barani: (state) => {
            state.count += 1;
        },
        komani: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});
export const { barani, komani, reset } = counterSlice.actions;
export default counterSlice.reducer;
