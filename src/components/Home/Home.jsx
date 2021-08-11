import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessageInput/MessageInput";
import ChatList from "../chatList/ChatList";
import "./home.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const { chatId } = useParams();
  const chatList = useSelector((state) => state.chats);

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
