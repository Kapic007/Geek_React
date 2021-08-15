import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { chatReducer } from "./chat";
import { messagesReducer } from "./messages";
import { moviesReducer } from "./movies";

export const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
  messages: messagesReducer,
  movies: moviesReducer,
});

export default rootReducer;