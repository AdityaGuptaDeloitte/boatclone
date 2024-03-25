// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

// Action Creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
  
});

export const increaseQuantity = productId => ({
  type: INCREASE_QUANTITY,
  payload: productId
});

export const decrementQuantity = productId => ({
  type: DECREMENT_QUANTITY,
  payload: productId
});

export const deleteFromCart = productId => ({
  type: DELETE_FROM_CART,
  payload: productId
});
