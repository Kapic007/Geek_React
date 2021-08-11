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
          src="https://storage.kun.uz/source/7/ZUg5Rc8dCGrq-xoaDq_2PMGZyzY6cfve.jpg"
          alt="404"
          width="50%"
          height="50%"
        ></img>
      )}
    </div>
  );
};

export default Home;
