export const SET_ERROR = "SET_ERROR";

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
