import { SET_MESSAGES } from "./actionTypes";

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      const message = action.payload.message;
      const chatId = action.payload.chatId;
      if (state?.[chatId]) {
        state[chatId] = [
          ...state[chatId],
          message,
        ]
      } else {
        state[chatId] = [message]
      }
      state = {...state};
      return state;
    }
    default:
      return state;
  }
}

export default reducer;