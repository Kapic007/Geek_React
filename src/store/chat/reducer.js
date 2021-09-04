import { SET_CHATS, SET_ERROR } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  chats: [],
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHATS: {
      return {
        ...state,
        chats: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;