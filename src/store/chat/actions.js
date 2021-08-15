import { CHAT_ADD, CHAT_DELETE } from "./actionTypes";

export const addChat = (name) => ({
  type: CHAT_ADD,
  payload: name,
});

export const deleteChat = (id) => ({
  type: CHAT_DELETE,
  payload: id,
});
