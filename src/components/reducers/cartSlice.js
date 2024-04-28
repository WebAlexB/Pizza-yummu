import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
    },
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            if (quantity > 0) {
                if (state.items[productId]) {
                    state.items[productId] += quantity;
                } else {
                    state.items[productId] = quantity;
                }
            }
        },
        increment(state, action) {
            const { productId } = action.payload;
            state.items[productId] += 1;
        },
        decrement(state, action) {
            const { productId } = action.payload;
            if (state.items[productId] > 0) {
                state.items[productId] -= 1;
            }
        },
    },
});

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
