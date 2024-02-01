import { SET_ERROR } from "../actions/errorActions";

const initialState = {
  showError: "",
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        showError: action.payload,
      };
    default:
      return state;
  }
}
