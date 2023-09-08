import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        barani: (state) => {
            state.count += 1;
        },
        komani: (state) => {
            // state > 0 ? (state.count -= 1) : ;
            if (state.count > 0) {
                state.count -= 1;
            } else {
                toast('আরে ভাই, ০ থাইক্কা কিবায় কমাবো?');
            }
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});
export const { barani, komani, reset } = counterSlice.actions;
export default counterSlice.reducer;
