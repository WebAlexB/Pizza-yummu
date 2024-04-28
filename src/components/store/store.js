import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

const store = createStore(rootReducer);

export default store;
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from '../reducers/cartSlice';
//
// export default configureStore({
//     reducer: {
//         cart: cartReducer,
//     },
// });