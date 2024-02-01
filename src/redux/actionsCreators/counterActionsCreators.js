import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET } from "../actions/counterActions";

export const counterIncrement = () => ({ type: COUNTER_INCREMENT });
export const counterDecrement = () => ({ type: COUNTER_DECREMENT });
export const counterReset = () => ({ type: COUNTER_RESET });
