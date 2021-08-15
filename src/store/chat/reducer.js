import { CHAT_ADD, CHAT_DELETE } from "./actionTypes";
import { mockChatList } from "../../common/mock/mockChatList";
import { v4 as uuidv4 } from 'uuid';

const initialState = mockChatList;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_ADD: {
      const id = uuidv4();
      const newState = {
        ...state,
        [id]: {
          id: id,
        name: action.payload,
        }
      };
      return newState;
    }
    case CHAT_DELETE: {
      const id = action.payload;
      delete state[id];
      state = {...state};
      return state;
    }
    default:
      return state;
  }
}

export default reducer;