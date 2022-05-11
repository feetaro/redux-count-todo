import { ADD_COUNT, INIT_COUNT, SUB_COUNT } from "./actions";

const initialState = {
  //value: 0
};

export const countReducer = (state = initialState, { type, payload }) => {
  console.log(state);

  switch (type) {
    case ADD_COUNT:
      return {
        ...state,
        [payload.index]: { value: state[payload.index].value + payload.value }
      };

    case SUB_COUNT:
      return {
        ...state,
        [payload.index]: { value: state[payload.index].value - payload.value }
      };

    case INIT_COUNT:
      return {
        ...state,
        [payload.index]: { value: 0 }
      };

    default:
      return state;
  }
};
