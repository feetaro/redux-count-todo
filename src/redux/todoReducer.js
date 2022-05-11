import { ADD_TODO } from "./actions";

const initialState = {
  todo: []
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todo: [...state.todo, payload.todo]
      };

    default:
      return state;
  }
};
