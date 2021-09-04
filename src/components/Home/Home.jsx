import MessageList from "../MessageList/MessageList";
import { useEffect } from "react";
import MessageInput from "../MessageInput/MessageInput";
import ChatList from "../chatList/ChatList";
import "./home.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connectChatsToFB } from "../../store/chat/actions";
import { connectMessagesToFB } from "../../store/messages/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const chatList = useSelector((state) => state.chats.chats);

  useEffect(() => {
    dispatch(connectChatsToFB());
    dispatch(connectMessagesToFB());
  }, []);

  return (
    <div className="home">
      <ChatList chats={chatList} />
      {!!chatList && chatList[chatId] && (
        <div className="main-container">
          <MessageList chatId={chatId} />
          <MessageInput chatId={chatId} />
        </div>
      )}
      {!chatList[chatId] && (
        <img
          src="https://ak.picdn.net/shutterstock/videos/1015265554/thumb/10.jpg"
          alt="404"
          width="70%"
          height="70%"
        ></img>
      )}
    </div>
  );
};

export default Home;
