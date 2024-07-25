import { useReducer } from "react";
import { UPDATE_USER } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        favourite: [...action.favourite],
        first: action.first,
        last: action.last,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
