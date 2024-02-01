import { SET_PRODUCTS } from "../actions/productActions";

const initialStateProducts = {
  items: [],
};

export const productsReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
