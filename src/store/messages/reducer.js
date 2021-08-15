import { SEND_MESSAGE } from "./actionTypes";

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
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