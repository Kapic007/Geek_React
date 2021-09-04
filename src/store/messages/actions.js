import { SET_MESSAGES, SET_ERROR } from "./actionTypes";
import mockBotMessage from "../../common/mock/mockBotMessage";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../common/config/firebase/firebase";


let answerTimer;

export const sendMessageToBot = (chatId, message) => (dispatch) => {
  dispatch(sendMessageWithFB(chatId, message));

  if (answerTimer) clearTimeout(answerTimer);

  const botMessage = {
    ...mockBotMessage(),
    id: uuidv4(),
  };
  
  answerTimer = setTimeout(() => {
    dispatch(sendMessageWithFB(chatId, botMessage));
  }, 1500);
}

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

const setError = (messages) => ({
  type: SET_ERROR,
  payload: messages,
});

export const connectMessagesToFB = () => (dispatch) => {
  try {
    db.ref("messages").off();
    db.ref("messages").on("value", (snapshot) => {
      let newMessages = {};
      if (!snapshot) {
        return;
      }
      snapshot.forEach((snap) => {
        const currentMsgs = snap.val();
        if (newMessages[snap.key]) {
          newMessages[snap.key].concat(Object.values(currentMsgs));
        } else {
          newMessages[snap.key] = Object.values(currentMsgs);
        }
      });

      dispatch(setMessages(newMessages));
    });
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export const sendMessageWithFB = (chatId, message) => (dispatch) => {
  try {
    db.ref("messages")
      .child(chatId)
      .push({
        ...message,
        id: `${chatId}-${Date.now()}`,
        chatId,
      });
  } catch (e) {
    dispatch(setError(e));
  }
};