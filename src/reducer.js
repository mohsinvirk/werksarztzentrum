const ADD_NODE = "ADD_NODES";
const DELETE_NODE = "DELETE_NODE";

import { AddEntry, DeleteEntry } from "./utils/dataUtils";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_NODE: {
      const newEntry = action.payload;

      return AddEntry(state, newEntry);
    }

    case DELETE_NODE: {
      return DeleteEntry(state, action.payload);
    }

    default:
      return state;
  }
};

export { ADD_NODE, DELETE_NODE };
