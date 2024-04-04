import { ADD_TO_CART } from '../action/addToCart';

const initialState = {
    cart: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId, quantity } = action.payload;
            const updatedCart = { ...state.cart };
            updatedCart[productId] = (updatedCart[productId] || 0) + quantity;
            return {
                ...state,
                cart: updatedCart,
            };
        default:
            return state;
    }
};

export default rootReducer;
