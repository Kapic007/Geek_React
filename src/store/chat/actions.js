import { CHAT_ADD, CHAT_DELETE, SET_CHATS, SET_ERROR } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../../common/config/firebase/firebase";

export const addChat = (name) => ({
  type: CHAT_ADD,
  payload: name,
});

export const deleteChat = (id) => ({
  type: CHAT_DELETE,
  payload: id,
});

const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const connectChatsToFB = () => (dispatch) => {
  try {
    db.ref("chats").off();
    db.ref("chats").on("value", (snapshot) => {
      let newChats = {};
      snapshot.forEach((snap) => {
        const currentChat = snap.val();
        newChats[currentChat.id] = currentChat;
      });
  
      dispatch(setChats(newChats));
    });
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export const addChatWithFB = (name) => (dispatch) => {
  try {
    const id = uuidv4();
  
    db.ref("chats").child(id).set({
      name,
      id,
    });
  } catch (e) {
    dispatch(setError(e.message));
  }
}

export const deleteChatWithFB = (id) => (dispatch) => {
  try {
    db.ref("chats").child(id).remove();
  } catch (e) {
    dispatch(setError(e.message));
  }
};