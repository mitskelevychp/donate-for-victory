import { SET_INPUT_VALUE } from "../actions/valueActions";

export const updateInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  payload: value,
});

