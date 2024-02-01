import { SET_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from "../actions/authActions";
import { LOG_IN, LOG_OUT } from "../actions/loggedInActions";

const initialState = {
  token: null,
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case REMOVE_AUTH_TOKEN:
      return {
        ...state,
        token: null,
      };
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
