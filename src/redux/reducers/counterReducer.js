import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET } from "../actions/counterActions";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return state + 1;
    }
    case COUNTER_DECREMENT: {
      return state - 1;
    }
    case COUNTER_RESET: {
      return 0;
    }
    default: return state;
  }
};

export default counterReducer;
