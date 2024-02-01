import axios from "axios";

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const REMOVE_AUTH_TOKEN = "REMOVE_AUTH_TOKENN";

export const setAuthToken = (token) => (dispatch) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
    dispatch({ type: SET_AUTH_TOKEN, payload: token });
  } else {
    delete axios.defaults.headers.common.Authorization;
    dispatch({ type: REMOVE_AUTH_TOKEN });
  }
};
