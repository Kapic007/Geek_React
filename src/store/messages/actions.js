import { SEND_MESSAGE } from "./actionTypes";

export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: {
    chatId: chatId,
    message: message,
  },
});