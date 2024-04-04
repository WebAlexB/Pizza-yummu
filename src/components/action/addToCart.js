export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (productId, quantity) => ({
    type: ADD_TO_CART,
    payload: { productId, quantity },
});
