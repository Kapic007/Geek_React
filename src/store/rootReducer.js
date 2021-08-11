import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { chatReducer } from "./chat";
import { messagesReducer } from "./messages";

export const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
  messages: messagesReducer,
});

export default rootReducer;