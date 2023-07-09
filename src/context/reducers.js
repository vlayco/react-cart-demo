export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {...state, cart: [...state.cart, {...action.payload, qty: 1}] };
    case "REMOVE_FROM_CART":
      return {...state, cart: state.cart.filter((cart) => cart.id !== action.payload.id) };
    case "CHANGE_PRODUCT_QTY":
      return {...state, cart: state.cart.filter((cart) => cart.id === action.payload.id ? cart.qty = action.payload.qty : cart.qty)};
    default:
      return state;
  }
}