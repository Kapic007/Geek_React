import { SEND_MESSAGE } from "./actionTypes";
import mockBotMessage from "../../common/mock/mockBotMessage";
import { v4 as uuidv4 } from "uuid";

export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: {
    chatId: chatId,
    message: message,
  },
});

let answerTimer;

export const sendMessageToBot = (chatId, message) => (dispatch) => {
  dispatch(sendMessage(chatId, message));

  if (answerTimer) clearTimeout(answerTimer);

  const botMessage = {
    ...mockBotMessage(),
    id: uuidv4(),
  };
  
  answerTimer = setTimeout(() => {
    dispatch(sendMessage(chatId, botMessage));
  }, 1500);
}