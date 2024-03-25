import { ADD_TO_CART, INCREASE_QUANTITY, DECREMENT_QUANTITY, DELETE_FROM_CART } from './Actions';

const initialState = {
  items: []
};

function cartReducer(state = initialState, action) {
  console.log(action.type)
  switch (action?.type) {
    case "CREATE":
    return{
      ...state,
      items: []
    }
    case ADD_TO_CART:
      // Check if the item is already in the cart
      console.log("in addtocart")
      const inCart = state.items.find(item => item.Product_ID === action.payload);
      console.log("in cart", [...state.items, { ...action.payload, quantity: 1 }])
      return {
        ...state,
        items: inCart
          ? state.items.map(item => item.Product_ID === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
          : [...state.items, { ...action.payload, quantity: 1 }]
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.Product_ID === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.Product_ID === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0) // Remove the item if the quantity becomes 0
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.Product_ID !== action.payload)
      };
    default:
      return state;
  }
}

export default cartReducer;
